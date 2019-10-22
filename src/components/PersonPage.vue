<template>
  <div class="person">
    <button type="button" @click="$router.go(-1)">Назад</button>

    <div class="person__header"></div>

    <div class="person__info">
      <div class="person__person-name">{{ person.name }}</div>
      <div class="person__person-addon">{{ gender(person.gender) }}</div>
      <div class="person__person-addon">Рост: {{ person.height }}</div>
      <div class="person__person-addon">Вес: {{ person.mass }}</div>
      <div class="person__person-addon">Глаза: {{ person.eye_color }}</div>
    </div>

    <div class="person__films" v-if="films.length > 0">
      <div class="person__films-header">
        Появление в фильмах
      </div>

      <div
        v-for="(item, index) in films"
        :key="index"
        class="person__film"
      >
        {{ item.title }} ({{ item.release_date }})
      </div>
    </div>
  </div>
</template>

<script>
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export default {
  data() {
    return {
      person: {},
      films: []
    }
  },
  async created() {
    this.$store.commit('setGlobalLoader', true);

    const personId = parseFloat(this.$route.params.id);

    await this.fetchPersonInfo(personId)
      .finally(() => {
        this.$store.commit('setGlobalLoader', false);
      })
  },
  methods: {
    async fetchPersonInfo(id) {
      this.$store.commit('setGlobalLoader', true);

      this.person = await this.$api.get(`people/${id}`)
        .finally(() => {
          this.$store.commit('setGlobalLoader', false);
        })

      this.fetchPersonFilms(this.person.films)
    },

    async fetchPersonFilms(filmsArray) {
      const start = async () => {
        await asyncForEach(filmsArray, async (x) => {
          this.$store.commit('setGlobalLoader', true);

          const { data } = await this.$api.getSimple(x)
            .finally(() => {
              this.$store.commit('setGlobalLoader', false);
            })

          this.films.push(data);
        });
      }
      start();
    },

    gender(gender) {
      if (gender === 'male') {
        return 'Мужчина'
      } else if (gender === 'female') {
        return 'Женщина'
      } else {
        return 'Пол не определен'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.person {
  width: 100%;
  height: 100%;
  padding: 50px;

  &__header {
    font-size: 22px;
    font-weight: 300;
    margin-top: 40px;
    margin-bottom: 25px;
  }

  &__info, &__films {
    text-align: left;
    max-width: 1400px;
    margin: 10px auto 30px;
  }

  &__person-name, &__films-header {
    font-weight: 600;
    margin-bottom: 5px;
  }

  &__person-addon, &__film {
    font-size: 14px;
  }
}
</style>
