<template>
    <div class="flex flex-row tablet:w-full laptop:w-1/2 items-center justify-center bg-gray-800 tablet:text-xxs laptop:text-lg font-moonBold p-3 rounded-lg"
        :class="classes">
        <div>
            {{props.name}} {{props.surname}}
        </div>
        <div class="rounded-lg tablet:ml-2 laptop:ml-10 p-1 bg-stone-600 text-white">
            {{props.numberOfGuests}}
        </div>
        <div class="laptop:pl-10 tablet:pl-5 text-white">
            <font-awesome-icon class="hover:cursor-pointer" @click="deleteGuest()" icon="fa-solid fa-trash-can" />
        </div>
        <div class="tablet:ml-3">
            <input class="tablet:p-1 rounded-lg w-10" :class="{'border-2 border-rose-700': isNaN(tableNumber)}" v-model="tableNumber" 
            type="tel" maxlength="2" v-debounce:300="tableGroupUpdated" debounce-events="keyup"/>
        </div>
</div>
</template>

<script setup>
    import { defineProps, ref, defineEmits } from 'vue';
    import axios from 'axios'
    const emit = defineEmits('guest-deleted', 'submit')
    const tableNumber = ref('')
    const classes = ref({
        'text-green-500': props.isAttending, 
        'text-red-500': !props.isAttending
    })

    function deleteGuest(){
        axios.post(process.env.VUE_APP_BASE_URL + 'Guests/DeleteGuest', {
                name: props.name,
                surname: props.surname
            },{
                headers : {
                    'D-API-Key': process.env.VUE_APP_DELETE_API_KEY
            }})
            .then(() => {
                classes.value = { 
                    ...classes.value, 
                    'bg-orange-500': true
                };
            emit('guest-deleted')
        });

        emit('guest-deleted')
    }

    const props = defineProps({
        name: String,
        surname: Number,
        isAttending: Number,
        numberOfGuests: Number,
        lastUpdated: Date
    })

    function tableGroupUpdated(value){
        console.log(value)
    }
</script>