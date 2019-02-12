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
        /**
         * 
         * 
         * Grid layout props
         * 
         * 
         */
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
        }
    },
    computed: {
        colsLength() {
            const {gridType, rowNames, numberOfRows, numberOfColumns, columnNames} = this
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
        colsLength() {
            if (!this.gridType)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
