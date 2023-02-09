<template>
    <div class='p-10'>
        <div class="text-center">
            <table class="w-full">
                <thead class="w-max">
                    <tr class="grid grid-cols-5 justify-between">
                        <th>Название блюда</th>
                        <th>Белки</th>
                        <th>Жиры</th>
                        <th>Углеводы</th>
                        <th>Ккал</th>
                    </tr>
                </thead>
            </table>
            <div class="h-[100px] overflow-scroll">
                <table class="w-full">
                    <tbody>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                        <tr>
                            <td>Азу</td>
                            <td>11,9</td>
                            <td>14,2</td>
                            <td>10,2</td>
                            <td>214</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

import { useNavbarStore } from '../stores/navbarStore';

const navbarStore = useNavbarStore()

navbarStore.pathNow = useRoute().path

document.title = 'Подборки'

</script>

<style scoped>
.box-table {
    height: 500px;
}
</style>