<template>
    <div class="container">
        <div class="row align-items-center w-100">
            <div class="col justify-content-center align-items-center">
                <button class="btn btn-success text-center">
                    Hello world
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import CalendarHeader from './CalendarHeader';
import GridView from './GridView';
export default {
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
            default: () => dayjs(),
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
            default: ''
        },
        headerTitleClass: {
            type: String, 
            default: ''
        },
        nextBtnClass: {
            type: String, 
            default: ''
        },
        prevBtnClass: {
            type: String, 
            default: ''
        },
        /**
         * Class of double arrow buttons
         * by default point to the next and prev months
         */
        doubleNextBtnClass: {
            type: String, 
            default: ''
        },
        doublePrevBtnClass: {
            type: String, 
            default: ''
        },
        // The same as show navigation
        hasNavigation: {
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
            default: false
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
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        // TODO: this props could be handled as a state variable if we're using data 
        // factories inside this component, else it must be refactored to the outside
        isLoading: {
            type: Boolean, 
            defualt: false
        },
        /** number of calendar grid columns */
        numberOfColumns: {
            type: Number, 
            default: 7
        },
        columnNames: {
            type: [Array, Object],
            /**
             * This must be changed to return an array of all default weekdays from our date library
             * for now we can handle it in the asyncData and use a helper function or a data factory prop 
             * to fill it
             */
            default: () => [] 
        },
        /**
         * A factory function that makes the days of the week 
         * this function has precedence over the columnNames prop
         */
        columnNameFactory: {
            type: Function,
            default: () => {}
        },
        columnLabelClass: {
            type: String, 
            default: ''
        },
        columnWrapperClass: {
            type: String, 
            default: ''
        }
    },
    components: {
        CalendarHeader, 
        GridView
    }
};
</script>

<style scoped lang='scss'>

</style>
