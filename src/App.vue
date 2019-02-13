<template>
    <div id="app" class="container-fluid justify-content-center align-items-center">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        >
        <div class="container p-3">
            <calendar 
                theme="jabama"
                :date="dayjs()"
                :min-date="dayjs()"
                :max-date="dayjs().add(46, 'day')"
                header-wrapper-class="jabama-header"
                header-nav-wrapper-class="jabama-nav-wrapper-class"
                next-btn-class="jabama-next-btn"
                prev-btn-class="jabama-prev-btn"
                double-next-btn-class="jabama-double-next-btn"
                double-prev-btn-class="jabama-double-prev-btn"
                id="my-calendar"
                :number-of-columns="7"
                :column-names="colNames"
                column-label-class="jabama-column-label"
                column-wrapper-class="jabama-column-wrapper"
                number-of-rows="6"
                grid-view-wrapper-class="jabama-grid-view-wrapper-class"
                cell-class="jabama-cell"
                cell-number-class="jabama-cell-number"
            />
        </div>
    </div>
</template>

<script>
import Calendar from './components/core/Calendar.vue';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import jalaliday from 'jalaliday';

dayjs.extend(isBetween);
dayjs.extend(jalaliday);

export default {
    name: 'App',
    components: {
        Calendar,
    },
    data: function () {
        let colNames = [];
        let startOfWeek = dayjs.startOf('week');
        let day = startOfWeek;
        for (let index = 0; index < 7; index++) {
            colNames.push(day.format('dddd'));
            day.add(1, 'day');
        }

        return {
            colNames
        }
    }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
