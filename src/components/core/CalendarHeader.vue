<template>
    <div
        :class="['default-header', headerWrapperClass]"
    >
        <slot
            name="header-content"
            :props="props"
        >
            <div 
                :class="['default-header-title', headerTitleClass]"
                v-if="hasTitle"
            >
                <slot :title="title" name="header-title">
                    <span> {{ title }} </span>
                </slot>
            </div>
            <div 
                v-if="hasNavigation"
                :class="['default-header-nav', headerNavWrapperClass]"
            >
                <div
                    v-if="hasNextBtn && hasPrevBtn"
                    class="default-nav-buttons"
                >
                    <slot name="nextBtn" :is-loading="props.isHeaderLoading" :class="['default-next-btn', nextBtnClass]">
                        &lt;
                    </slot>
                    <slot name="prevBtn" :is-loading="props.isHeaderLoading" :class="['default-prev-btn', prevBtnClass]">
                        &gt;
                    </slot>
                </div>
                <div
                    v-if="hasDoubleNextBtn && hasDoublePrevBtn"
                    class="default-double-nav-buttons"
                >
                    <slot name="doubleNextBtn" :is-loading="props.isHeaderLoading" :class="['default-double-next-btn', doubleNextBtnClass]">
                        &lt;&lt;
                    </slot>
                    <slot name="doublePrevBtn" :is-loading="props.isHeaderLoading" :class="['default-double-prev-btn', doublePrevBtnClass]">
                        &gt;&gt;
                    </slot>
                </div>
            </div>
        </slot>
        <slot name="headerLoading" :is-loading="isHeaderLoading">
            <div :class="['default-header-loading', headerLoadingClass]">
                Loading ...
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String, 
            default: ''
        },
        monthTitleFormat: {
            type: String,
            default: 'MMMM',
        },
        headerWrapperClass: {
            type: String, 
            default: ''
        },
        headerTitleClass: {
            type: String, 
            default: ''
        },
        headerLoadingClass: {
            type: String, 
            default: ''
        },
        headerNavWrapperClass: {
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
        isHeaderLoading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
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
            default: () => [] 
        },
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
        },
        rowNames: {
            type: [Array, Object],
            default: () => [] 
        },
        rowNameFactory: {
            type: Function,
            default: () => {}
        },
        numberOfRows: {
            type: [Number, Function],
            default: 7
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
