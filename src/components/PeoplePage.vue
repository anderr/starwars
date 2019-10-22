<template>
  <div class="main">
    <div class="main__header">Персонажи вселенной звездных войн</div>
    <div v-if="people.results.length > 0" class="main__people">
      <div
        v-for="(item, index) in people.results"
        :key="index"
        @click="$router.push({ name: 'person', params: { id: generateIndex(index) } })"
        class="main__person"
      >
        <div class="main__person-name">{{ item.name }} ({{ generateIndex(index) }})</div>
        <div class="main__person-addon">{{ gender(item.gender) }}</div>
        <div class="main__person-addon">Рост: {{ item.height }}</div>
        <div class="main__person-addon">Вес: {{ item.mass }}</div>
        <div class="main__person-addon">Глаза: {{ item.eye_color }}</div>
      </div>
    </div>

    <div class="main__pagination">
      <button
        v-if="people.previous !== null"
        @click="fetchPeople(people.previous)"
        :class="loadingProcess ? 'disabled' : ''"
        type="button"
        class="main__pagination-btn main__pagination-item"
      >Назад</button>

      <div class="main__pagination-page main__pagination-item">
        page: {{ page }}
      </div>

      <button
        v-if="people.next !== null"
        @click="fetchPeople(people.next)"
        :class="loadingProcess ? 'disabled' : ''"
        type="button"
        class="main__pagination-btn main__pagination-item"
      >Вперед</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: {
        results: []
      },
      page: 1,
      loadingProcess: false
    }
  },
  async created() {
    await this.fetchPeople();
  },
  methods: {
    async fetchPeople(link) {
      this.$store.commit('setGlobalLoader', true);
      this.loadingProcess = true;

      if (link !== undefined) {
        // пока так чтобы не терять время
        const params = link.substring(link.indexOf("?")+1);
        this.page = params.split('=')[1];

        const { data } = await this.$api.getSimple(link)
          .finally(() => {
            this.$store.commit('setGlobalLoader', false);
            this.loadingProcess = false;
          })

        this.people = data;
      } else {
        this.people = await this.$api.get('people')
          .finally(() => {
            this.$store.commit('setGlobalLoader', false);
            this.loadingProcess = false;
          })
      }

      console.log(this.people);
    },

    gender(gender) {
      if (gender === 'male') {
        return 'Мужчина'
      } else if (gender === 'female') {
        return 'Женщина'
      } else {
        return 'Пол не определен'
      }
    },

    generateIndex(index) {
      if (this.page === 1) {
        return index + 1
      } else {
        return (this.page - 1) * 10 + index + 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars.scss';

.main {
  width: 100%;
  height: 100%;

  &__header {
    font-size: 22px;
    font-weight: 300;
    margin-top: 40px;
    margin-bottom: 25px;
  }

  &__people {
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 1400px;
    margin: 10px auto;
  }

  &__person {
    width: 23%;
    margin: 0 1% 20px;
    padding: 20px;
    border-radius: 4px;
    background: $colorGrey;
  }

  &__person-name {
    font-weight: 600;
    margin-bottom: 5px;
  }

  &__person-addon {
    font-size: 14px;
  }

  &__pagination {
    text-align: center;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  &__pagination-page {
    font-size: 14px;
  }

  &__pagination-item {
    margin: 0 5px;
  }

  &__pagination-btn {
    background: $colorSand;
    height: 30px;
    padding: 0 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background .3s;

    &:hover {
      background: darken($colorSand, 10%);
      transition: background .3s;
    }

    &.disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
}
</style>
