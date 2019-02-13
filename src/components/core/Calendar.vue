<template>
    <div 
        :class="['container', theme]"
        :id="id"
        
    >
        <slot name="calendar-loading" :isLoading={isLoading}>
            <div :class="['loading-container']">
                loading...
            </div>
        </slot>
    </div>
</template>

<script>
import CalendarHeader from './CalendarHeader.vue';
import Cell from './Cell.vue';

export default {
    components: {
        CalendarHeader,
        Cell,
    },
    /**
     * This components is a container, all data and logic are handled in this files
     * and its corresponing helpers
     */
    props: {
        // backward compatible props
        /**
         * A class name that is applied to all of the wrapper and
         * sub components
         */
        theme: {
            type: String,
            default: 'default',
        },
        showPreviousWeeks: {
            type: Boolean,
            default: true,
        },
        /**
         * enable header and navigation
         */
        showNavigation: {
            type: Boolean,
            default: true,
        },
        /**
         * Whether each cell is selectable or not
         */
        selectable: {
            type: Boolean,
            default: false,
        },
        /**
         * This is the main date object passed to the calendar
         * this could be any date library
         */
        date: {
            type: Object,
            default: () => {},
        },
        /**
         * Number of months that we show in one panel
         * WARNING: to be deprecated
         */
        visibleMonths: {
            type: Number,
            default: 1,
        },
        /**
         * Evetns and other data that is passed to the sub-components
         * It's too general, must be broken into smaller data sections
         * WARNING: to be deprecated
         */
        data: {
            type: Object,
            default: () => ({}),
        },
        minDate: {
            type: [Object, String],
            default: null,
        },
        maxDate: {
            type: [Object, String],
            default: null,
        },
        /**
         * An array of selcted dates and cells, this is also too specific and is going to be replaced
         * by a select event
         * WARNING: to be deprecated
         */
        selections: {
            type: Array,
            default: () => [],
        },
        monthTitleFormat: {
            type: String,
            default: 'MMMM',
        },
        // end of backward compatibility part

        /**
         * Header props to be relayed to Clendar"Header Component
         */
        headerWrapperClass: {
            type: String,
            default: '',
        },
        headerTitleClass: {
            type: String,
            default: '',
        },
        headerNavWrapperClass: {
            type: String,
            default: '',
        },
        nextBtnClass: {
            type: String,
            default: '',
        },
        prevBtnClass: {
            type: String,
            default: '',
        },
        /**
         * Class of double arrow buttons
         * by default point to the next and prev months
         */
        doubleNextBtnClass: {
            type: String,
            default: '',
        },
        doublePrevBtnClass: {
            type: String,
            default: '',
        },
        // The same as show navigation
        hasNavigation: {
            type: Boolean,
            default: true,
        },
        hasTitle: {
            type: Boolean,
            default: true,
        },
        hasNextBtn: {
            type: Boolean,
            default: true,
        },
        hasPrevBtn: {
            type: Boolean,
            default: true,
        },
        hasDoubleNextBtn: {
            type: Boolean,
            default: true,
        },
        hasDoublePrevBtn: {
            type: Boolean,
            default: true,
        },
        /**
         * This is here to handle any kind of loading and lazy loading in header component
         */
        isHeaderLoading: {
            type: Boolean,
            default: false,
        },
        /**
         * End of Header Class props
         */
        //---------------------------------
        /**
         * General Calendar component props
         */
        id: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        /**
         * In case the user just wants a predetermined style
         * we have to note that these can be all true at the same time,
         * in that case we must build and array of these types and let the
         * user choose between them
         */
        year: {
            type: Boolean,
            default: false,
        },
        month: {
            type: Boolean,
            default: false,
        },
        week: {
            type: Boolean,
            default: false,
        },
        day: {
            type: Boolean,
            default: false,
        },
        // TODO: this props could be handled as a state variable if we're using data
        // factories inside this component, else it must be refactored to the outside
        isLoading: {
            type: Boolean,
            defualt: false,
        },
        /** number of calendar grid columns */
        numberOfColumns: {
            type: Number,
            default: 7,
        },
        hasColumnLabels: {
            type: Boolean,
            default: true,
        },
        hasRowLabels: {
            type: Boolean,
            default: false,
        },
        columnNames: {
            type: [Array, Object],
            /**
             * This must be changed to return an array of all default weekdays from our date library
             * for now we can handle it in the asyncData and use a helper function or a data factory prop
             * to fill it
             */
            default: () => [],
        },
        /**
         * A factory function that makes the days of the week
         * this function has precedence over the columnNames prop
         */
        columnNameFactory: {
            type: Function,
            default: () => {},
        },
        rowNames: {
            type: [Array, Object],
            default: () => [],
        },
        /**
         * A factory function that makes the days of the week
         * this function has precedence over the columnNames prop
         */
        rowNameFactory: {
            type: Function,
            default: () => {},
        },
        columnLabelClass: {
            type: String,
            default: '',
        },
        columnWrapperClass: {
            type: String,
            default: '',
        },
        weekendClass: {
            type: String,
            default: '',
        },
        /**
         *
         *
         * Grid layout props
         *
         *
         */
        numberOfRows: {
            type: [Number, Function],
            default: 7,
        },
        gridViewWrapperClass: {
            type: String,
            default: '',
        },
        events: {
            type: [Object, Array],
            default: () => [],
        },
        cellClass: {
            type: String,
            default: '',
        },
        cellNumberClass: {
            type: String,
            default: '',
        },
    },
    computed: {
        colsLength() {
            const {
                year, month, week, day, numberOfColumns, columnNames,
            } = this;
            /**
             * These arbitrary numbers could be fed to this component through
             * some props like colsInMonth, colsInWeek, colsInDay and etc
             */
            if (columnNames.length || numberOfColumns) {
                return columnNames.length || numberOfColumns;
            } if (year) {
                return 3;
            } if (month) {
                return 7;
            } if (week) {
                return 7;
            } if (day) {
                return 12;
            }
        },
        RowsLength() {
            const {
                year, month, week, day, numberOfRows, rowNames,
            } = this;
            /**
             * These arbitrary numbers could be fed to this component through
             * some props like colsInMonth, colsInWeek, colsInDay and etc
             *
             * NOTICE: if gridType is month, then the row and cols number must be pre-determined
             */
            if (rowNames.length || numberOfRows) {
                return rowNames.length || numberOfRows;
            } if (year) {
                return 4;
            } if (month) { // just a fallback, we must always use numberOfRows in that case show the maximum number of row
                return 6;
            } if (week) { // just a fallback, we must always use numberOfRows
                return 10;
            } if (day) { // just a fallback, we must always user numberOfRows
                return 12;
            }
        },
    },
};
</script>

<style scoped lang='scss'>
    .loading-container {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4;
        background: rgba($color: #000000, $alpha: 0.5);
    }
</style>
