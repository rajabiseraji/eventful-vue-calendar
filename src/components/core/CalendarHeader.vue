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
                :class="['default-header-nav', ]"
            >

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
        /**
         * This is here to handle any kind of loading and lazy loading in header component
         */
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
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
