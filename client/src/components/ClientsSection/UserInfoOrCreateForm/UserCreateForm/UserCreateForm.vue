<template>
    <!-- Создать пользователя  -->
    <div class="overflow-hidden rounded-md">

        <div class="px-4 py-1 flex bg-gray-700">
            <h3 class="my-auto text-lg font-medium leading-6 text-gray-400">Создать пользователя</h3>

            <!-- Выпадающий список с опциями -->
            <div class="ml-auto h-[49.2px] flex my-auto items-center text-gray-400">

                <OptionsDropdown v-if="userStore.admin == 'admin'" />

            </div>
        </div>

        <div class="h-[550px] border-t border-gray-700 text-gray-400 overflow-y-auto">

            <dl>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">Имя:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">
                        <input v-model="userInfoCreate.name" class="transition ease-in-out duration-350 focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-500 w-full border text-sm rounded-md block p-1 bg-gray-700 border-gray-600 placeholder-gray-400" type="text" />
                    </dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">Группы пользователя:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">
                        <GroupsDropdown />
                    </dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">Номер телефона:</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0 break-words">
                        <input v-model="userInfoCreate.phoneNumber" class="transition ease-in-out duration-350 focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-500 w-full border text-sm rounded-md block p-1 bg-gray-700 border-gray-600 placeholder-gray-400" type="text" />
                    </dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">Сфера поиска работы:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">Недвижимость</dd>
                </div>
                <div v-if="true"
                    class="border-b border-gray-700 bg-gray-800  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">Резюме:</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                        <ul role="list" class="divide-y divide-gray-700 rounded-md border border-gray-700">
                            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div class="flex w-0 flex-1 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                    <span class="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                </div>
                                <div class="ml-4 flex-shrink-0">
                                    <a @click="downloadSelectedResume"
                                        class="cursor-pointer active:text-gray-500 transition ease-in-out duration-350 font-medium text-gray-400 hover:text-gray-300">Скачать</a>
                                </div>
                            </li>
                        </ul>
                    </dd>
                </div>
                <div v-else
                    class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">Ссылка на резюме:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">...</dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">Работает сейчас:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">Нет</dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">Последние работы:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                        <div class="rounded-md overflow-hidden border border-gray-700">
                            <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Название компании: Google
                                    </div>
                                    <div class="m-auto p-1">
                                        Сфера: IT
                                    </div>
                                    <div class="m-auto p-1">
                                        Должность: Директор
                                    </div>
                                    <div class="m-auto p-1">
                                        Начало работы: 2022/11
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Название компании: Google
                                    </div>
                                    <div class="m-auto p-1">
                                        Сфера: IT
                                    </div>
                                    <div class="m-auto p-1">
                                        Должность: Директор
                                    </div>
                                    <div class="m-auto p-1">
                                        Начало работы: 2022/11
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Название компании: Google
                                    </div>
                                    <div class="m-auto p-1">
                                        Сфера: IT
                                    </div>
                                    <div class="m-auto p-1">
                                        Должность: Директор
                                    </div>
                                    <div class="m-auto p-1">
                                        Начало работы: 2022/11
                                    </div>
                                </div>

                            </div>
                        </div>
                    </dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">Уровень образования:</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0 break-words">Высшее</dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">Владеемые языки:</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                        <div class="rounded-md overflow-hidden border border-gray-700">
                            <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Английский
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Английский
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Английский
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Английский
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">Владеемые навыки:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                        <div class="rounded-md overflow-hidden border border-gray-700">
                            <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Стрессоустойчивость
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Стрессоустойчивость
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Стрессоустойчивость
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Стрессоустойчивость
                                    </div>
                                    <div class="m-auto p-1">
                                        Уровень владения 0-10: 5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dd>
                </div>
                <div class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">Социальные сети:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                        <div class="rounded-md overflow-hidden border border-gray-700">
                            <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                <div class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                    <div class="m-auto p-1">
                                        Linkedin
                                    </div>
                                    <div class="m-auto p-1">
                                        <a class="underline" href="https://test.com">https://test.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dd>
                </div>
            </dl>
        </div>

    </div>
</template>

<script setup>
import OptionsDropdown from './OptionsDropdown.vue';
import GroupsDropdown from './GroupsDropdown.vue'

import { ref, reactive } from 'vue';

import { useOptionsStore } from '../../../../stores/oprionsStore';
import { useUserStore } from '../../../../stores/userStore';

const optionsStore = useOptionsStore()
const userStore = useUserStore()


const downloadSelectedResume = () => {
    console.log('Скачать резюме выбранного пользователся')
}


const userInfoCreate = reactive({
    name: null, // ввод вручную ФИО...
    groups: null, // [0 (админ), 2(работодатель)] - будет выбирать из выпад. списка
    phoneNumber: null, // ввод вручную только цифры
    searchScopeJob: null, // 1 (недвижимость) или 3 (строительство) - выбирает из выпад. списка
    summary: null, // функционал загрузки файла и закрепления его за этим пользователем
    summaryLink: null, // или вместо файла ссылка на резюме в ручную
    workNow: null, // true (да) или false (нет)
    lastJobs: null, // [ ['Google', 'IT', 'Директор', '2022/11'], [...], ...]
    eucationLevel: null, // 1 (высшее), 2 (среднее)
    spokenLanguages: null, // [ ['Английский', '9'], [...], ...]
    ownedSkills: null, // [ ['Стрессоустойчиость', '6'], [...], ...]
    socialMedia: null, // [ ['Linkedin', 'https://test.com'], [...], ...]
})

</script>