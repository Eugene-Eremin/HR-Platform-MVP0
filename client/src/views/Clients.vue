<template>
    <div class="flex flex-col xl:flex-row justify-center items-start">

        <!-- Пользователи -->
        <div class="w-[370px] 0.5sm:w-[490px] md:w-[750px] mx-auto p-10 drop-shadow-2xl lg:w-3/5">

            <!-- Search форма -->
            <div class="pb-4">
                <div class="relative mt-1 text-gray-400">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input v-model="search" @keyup.enter="searchUsers" type="text"
                        class="transition ease-in-out duration-350 focus:outline-none focus:ring focus:ring-gray-400 focus:border-gray-500 w-full border text-sm rounded-md block pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
                        placeholder="Найти по номеру, имени или сфере">
                </div>
            </div>

            <!-- Таблица -->
            <div class="rounded-md overflow-hidden">

                <div class="overflow-y-scroll md:w-auto md:h-[545px] ">

                    <table class="w-max 1.5xl:w-full text-center text-sm text-gray-400">

                        <thead class="text-xs uppercase bg-gray-700">
                            <tr>
                                <th class="px-6 py-3">
                                    Номер телефона
                                </th>
                                <th class="px-6 py-3">
                                    Имя
                                </th>
                                <th class="px-6 py-3">
                                    Сфера
                                </th>
                                <th class="px-6 py-3">
                                    Резюме
                                </th>
                                <th v-if="userStore.admin" class="px-6 py-3"></th>
                            </tr>
                        </thead>


                        <tbody class="mt-10">

                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                            <tr
                                class="cursor-pointer transition ease-in-out duration-350 border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td @click="openUser" class="px-6 py-3">
                                    + 7 900 000 00 00
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Сергей Сергеев Сергеевич
                                </td>
                                <td @click="openUser" class="px-6 py-3">
                                    Недвижимость
                                </td>
                                <td class="px-6 py-3">
                                    <svg @click="downloadResume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path
                                            d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                    </svg>
                                </td>
                                <td v-if="userStore.admin" scope="col" class="px-6 py-3">
                                    <svg @click="deleteUser" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="active:bg-gray-800 transition ease-in-out duration-350 w-10 h-10 mx-auto rounded-md p-2 hover:bg-gray-700">
                                        <path fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

        <!-- Инфо. выбранного пользователя -->
        <div class="w-[370px] 0.5sm:w-[490px] md:w-[750px] drop-shadow-2xl mx-auto p-10 lg:w-2/5">

            <div class="overflow-hidden rounded-md">

                <div class="px-4 py-1 flex bg-gray-700">
                    <h3 class="my-auto text-lg font-medium leading-6 text-gray-400">Выбранный пользователь</h3>
                    <div class="ml-auto h-[49.2px] flex">
                    </div>
                </div>

                <div class="h-[550px] border-t border-gray-700 text-gray-400 overflow-y-auto">

                    <dl>
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium">Имя:</dt>
                            <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">Сергей Сергеев Сергеевич</dd>
                        </div>
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium ">Группы пользователя:</dt>
                            <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">Администратор, Работадатель</dd>
                        </div>
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium ">Номер телефона:</dt>
                            <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0 break-words">+ 7 900 000 00 00</dd>
                        </div>
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="w-6 h-6">
                                                <path
                                                    d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                            </svg>
                                            <span class="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                        </div>
                                        <div class="ml-4 flex-shrink-0">
                                            <a @click="downloadResume"
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
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium ">Работает сейчас:</dt>
                            <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 break-words">Нет</dd>
                        </div>
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium">Последние работы:</dt>
                            <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                                <div class="rounded-md overflow-hidden border border-gray-700">
                                    <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
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
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
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
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
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
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium ">Уровень образования:</dt>
                            <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0 break-words">Высшее</dd>
                        </div>
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium">Владеемые языки:</dt>
                            <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                                <div class="rounded-md overflow-hidden border border-gray-700">
                                    <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                            <div class="m-auto p-1">
                                                Английский
                                            </div>
                                            <div class="m-auto p-1">
                                                Уровень владения 0-10: 5
                                            </div>
                                        </div>
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                            <div class="m-auto p-1">
                                                Английский
                                            </div>
                                            <div class="m-auto p-1">
                                                Уровень владения 0-10: 5
                                            </div>
                                        </div>
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                            <div class="m-auto p-1">
                                                Английский
                                            </div>
                                            <div class="m-auto p-1">
                                                Уровень владения 0-10: 5
                                            </div>
                                        </div>
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
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
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium">Владеемые навыки:</dt>
                            <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                                <div class="rounded-md overflow-hidden border border-gray-700">
                                    <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                            <div class="m-auto p-1">
                                                Стрессоустойчивость
                                            </div>
                                            <div class="m-auto p-1">
                                                Уровень владения 0-10: 5
                                            </div>
                                        </div>
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                            <div class="m-auto p-1">
                                                Стрессоустойчивость
                                            </div>
                                            <div class="m-auto p-1">
                                                Уровень владения 0-10: 5
                                            </div>
                                        </div>
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
                                            <div class="m-auto p-1">
                                                Стрессоустойчивость
                                            </div>
                                            <div class="m-auto p-1">
                                                Уровень владения 0-10: 5
                                            </div>
                                        </div>
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
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
                        <div
                            class="border-b border-gray-700 bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium ">Социальные сети:</dt>
                            <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                                <div class="rounded-md overflow-hidden border border-gray-700">
                                    <div class="text-center overflow-y-auto p-2 pb-0 h-32 w-full">
                                        <div
                                            class="mb-2 flex flex-row rounded-md overflow-hidden border border-gray-700">
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
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

import { useNavbarStore } from '../stores/navbarStore';
import { useUserStore } from '../stores/userStore'

const navbarStore = useNavbarStore()
const userStore = useUserStore()

navbarStore.pathNow = useRoute().path


const search = ref('')

const searchUsers = () => {
    console.log(`Найти пользователей - ${search.value}`)
    // ...
    search.value = ''
}


const openUser = () => {
    console.log('Открыть пользователя')
}

const downloadResume = () => {
    console.log('Скачать резюме')
}

const deleteUser = () => {
    console.log('Удалить пользователя')
}


document.title = 'Клиенты'

</script>