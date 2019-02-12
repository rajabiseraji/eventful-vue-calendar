<template>
    
</template>

<script>
export default {
    props: {
        numberOfColumns: {
            type: Number, 
            default: 7
        },
        hasColumnLabels: {
            type: Boolean,
            default: true
        },
        hasRowLabels: {
            type: Boolean, 
            default: false
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
        rowNames: {
            type: [Array, Object],
            default: () => [] 
        },
        /**
         * A factory function that makes the days of the week 
         * this function has precedence over the columnNames prop
         */
        rowNameFactory: {
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
        },
        weekendClass: {
            type: String,
            default: ''
        },
        numberOfRows: {
            type: [Number, Function],
            default: 0
        },
        gridViewWrapperClass: {
            type: String,
            default: ''
        },
        gridType: {
            validator: function (value) {
                // The value must match one of these strings
                return ['year', 'month', 'week', 'day', ''].indexOf(value) !== -1
            },
            default: ''
        },
        /**
         * For instance, if we're rendering a month that has 31 days, we must have these 31 days
         * passed to this component as rawGridData
         * NOTICE: IT IS NOT THE EVENTS DATA!
         */
        rawGridData: {
            type: [Object, Array],
            default: []
        }
        
    },
    computed: {
        colsLength() {
            const {gridType, numberOfColumns, columnNames} = this
            /**
             * These arbitrary numbers could be fec to this component through 
             * some props like colsInMonth, colsInWeek, colsInDay and etc
             */
            if (columnNames.length || numberOfColumns) {
                return columnNames.length || numberOfColumns;
            } else if (gridType === 'year') {
                return 3;
            } else if (gridType === 'month') {
                return 7;
            } else if (gridType === 'week') {
                return 7;
            } else if (gridType === 'day') {
                return 12;
            }
        },
        RowsLength() {
            const {gridType, rowNames, numberOfRows} = this
            /**
             * These arbitrary numbers could be fec to this component through 
             * some props like colsInMonth, colsInWeek, colsInDay and etc
             * 
             * NOTICE: if gridType is month, then the row and cols number must be pre-determined
             */
            if (rowNames.length || numberOfRows) {
                return rowNames.length || numberOfRows;
            } else if (gridType === 'year') {
                return 4;
            } else if (gridType === 'month') { // just a fallback, we must always use numberOfRows in that case show the maximum number of row
                return 6;
            } else if (gridType === 'week') { // just a fallback, we must always use numberOfRows
                return 10;
            } else if (gridType === 'day') { // just a fallback, we must always user numberOfRows
                return 12;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
