<template>
    <div
        :class="['calendar-cell', 
            {'disabled': disabled}, 
            {selectedClass: selected}, 
            {activeClass: isActive} 
        ]"
        @mouseover="$emit('hover', id)"
        @mouseout="$emit('blur', id)"
        @click="$emit('click', {id, index})"
    >
        <div class="cell-content">
            <slot
               :events="events"
               :date="date"
               name="cell"     
            > 
                <div class="default-cell">
                    {{ date.format('D') }}
                </div>
            </slot>
        </div>
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
        },
        events: {
            type: [Array, Object],
            default: () => []
        },
        date: {
            type: Object,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
.calendar-cell {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    .cell-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
}
</style>
