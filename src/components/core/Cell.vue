<template>
    <div
        :class="['calendar-cell', 
            {'disabled': disabled}, 
            {selectedClass: selected}, 
            {activeClass: isActive} 
        ]"
        @mouseover="$emit('hover', id)"
        @mouseout="$emit('blur', id)"
        @click="$emit('click', )"
    >

    </div>
</template>

<script>
export default {
    props: {
        calendarId: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        hoverClass: {
            type: String,
            default: 'hover'
        },
        activeClass: {
            type: String,
            default: 'hover'
        },
        selectedClass: {
            type: String,
            default: 'hover'
        },
        id: {
            type: String, 
            default: ''
        },
        index: {
            type: Number, 
            default: -1,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
