<template>
    <div class="container-fluid justify-content-center align-items-center">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <div class="container p-3">
            <calendar
                id="my-calendar"
                theme="jabama"
                :date="today"
                :min-date="today"
                :max-date="today.add(46, 'day')"
                header-wrapper-class="jabama-header"
                header-nav-wrapper-class="jabama-nav-wrapper-class"
                next-btn-class="jabama-next-btn"
                prev-btn-class="jabama-prev-btn"
                double-next-btn-class="jabama-double-next-btn"
                double-prev-btn-class="jabama-double-prev-btn"
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
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import jalaliday from 'jalaliday';
import Calendar from './core/Calendar.vue';

dayjs.extend(isBetween);
dayjs.extend(jalaliday);

export default {
    name: 'HelloWorld',
    components: {
        Calendar,
    },
    data() {
        const colNames = [];
        const startOfWeek = dayjs().startOf('week');
        const day = startOfWeek;
        for (let index = 0; index < 7; index += 1) {
            colNames.push(day.format('dddd'));
            day.add(1, 'day');
        }

        return {
            colNames,
            today: dayjs(),
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
