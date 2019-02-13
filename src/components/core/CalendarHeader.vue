<template>
    <div
        :class="['default-header', {'disabled': disabled}, headerWrapperClass]"
    >
        <slot
            name="header-content"
            v-bind="propsToPass"
        >
            <div
                v-if="propsToPass.hasTitle"
                :class="['default-header-title', propsToPass.headerTitleClass]"
            >
                <slot
                    :title="propsToPass.title"
                    name="header-title"
                >
                    <span> {{ propsToPass.title }} </span>
                </slot>
            </div>
            <div
                v-if="propsToPass.hasNavigation"
                :class="['default-header-nav', propsToPass.headerNavWrapperClass]"
            >
                <div
                    v-if="propsToPass.hasNextBtn && propsToPass.hasPrevBtn"
                    class="default-nav-buttons"
                >
                    <slot
                        name="nextBtn"
                        :is-loading="propsToPass.isHeaderLoading"
                        :disabled="propsToPass.disabled"
                        :class="['default-next-btn', propsToPass.nextBtnClass]"
                    >
                        &lt;
                    </slot>
                    <slot
                        name="prevBtn"
                        :is-loading="propsToPass.isHeaderLoading"
                        :disabled="propsToPass.disabled"
                        :class="['default-prev-btn', propsToPass.prevBtnClass]"
                    >
                        &gt;
                    </slot>
                </div>
                <div
                    v-if="propsToPass.hasDoubleNextBtn && propsToPass.hasDoublePrevBtn"
                    class="default-double-nav-buttons"
                >
                    <slot
                        name="doubleNextBtn"
                        :is-loading="propsToPass.isHeaderLoading"
                        :disabled="propsToPass.disabled"
                        :class="['default-double-next-btn', propsToPass.doubleNextBtnClass]"
                    >
                        &lt;&lt;
                    </slot>
                    <slot
                        name="doublePrevBtn"
                        :is-loading="propsToPass.isHeaderLoading"
                        :disabled="propsToPass.disabled"
                        :class="['default-double-prev-btn', propsToPass.doublePrevBtnClass]"
                    >
                        &gt;&gt;
                    </slot>
                </div>
            </div>
            <div
                :class="[]"
            />
        </slot>
        <slot
            name="header-loading"
            :is-loading="isHeaderLoading"
        >
            <div
                v-if="isHeaderLoading"
                :class="['default-header-loading', headerLoadingClass]"
            >
                Loading ...
            </div>
        </slot>
        <slot
            name="header-column-names"
            v-bind="{numberOfColumns, hasColumnLabels, columnNames, columnNameFactory, columnLabelClass, columnWrapperClass}"
        >
            <div :class="['default-column-names-wrapper', columnWrapperClass]" />
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: '',
        },
        monthTitleFormat: {
            type: String,
            default: 'MMMM',
        },
        headerWrapperClass: {
            type: String,
            default: '',
        },
        headerTitleClass: {
            type: String,
            default: '',
        },
        headerLoadingClass: {
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
        isHeaderLoading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
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
            default: () => [],
        },
        columnNameFactory: {
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
        rowNames: {
            type: [Array, Object],
            default: () => [],
        },
        rowNameFactory: {
            type: Function,
            default: () => {},
        },
        numberOfRows: {
            type: [Number, Function],
            default: 7,
        },
    },
    data() {
        return {
            propsToPass: {
                id: this.id,
                monthTitleFormat: this.monthTitleFormat,
                headerWrapperClass: this.headerWrapperClass,
                headerTitleClass: this.headerTitleClass,
                headerLoadingClass: this.headerLoadingClass,
                headerNavWrapperClass: this.headerNavWrapperClass,
                nextBtnClass: this.nextBtnClass,
                prevBtnClass: this.prevBtnClass,
                doubleNextBtnClass: this.doubleNextBtnClass,
                doublePrevBtnClass: this.doublePrevBtnClass,
                hasNavigation: this.hasNavigation,
                hasTitle: this.hasTitle,
                hasNextBtn: this.hasNextBtn,
                hasPrevBtn: this.hasPrevBtn,
                hasDoubleNextBtn: this.hasDoubleNextBtn,
                hasDoublePrevBtn: this.hasDoublePrevBtn,
                isHeaderLoading: this.isHeaderLoading,
                disabled: this.disabled,
                title: this.title,
                numberOfColumns: this.numberOfColumns,
                hasColumnLabels: this.hasColumnLabels,
                hasRowLabels: this.hasRowLabels,
                columnNames: this.columnNames,
                columnNameFactory: this.columnNameFactory,
                columnLabelClass: this.columnLabelClass,
                columnWrapperClass: this.columnWrapperClass,
                rowNames: this.rowNames,
                rowNameFactory: this.rowNameFactory,
                numberOfRows: this.numberOfRows,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
    .default-header-wrapper {
        width: 100%;
        display: flex;
        height: auto;
    }
</style>
