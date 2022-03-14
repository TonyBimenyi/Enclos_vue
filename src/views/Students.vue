<template>
    <div class="container">
        <div class="header_table">
            <div class="add_btn">
                <button @click="dialog=true"><span class="material-icons-outlined">add_box</span>
                Ajouter un eleve</button>
            </div>
            <div class="search">
                <input type="search">
            </div>
        </div>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <td>#ID</td>
                        <td>NOM</td>
                        <td>PRENOM</td>
                        <td>SECTION</td>
                        <td>CLASSE</td>
                        <td>DATE DE NAISSANCE</td>
                        <td>ACTIONS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
         <Student @close="close" v-if="dialog"/>
    </div>
</template>
<script>
import Student from '../components/add_student.vue'
export default {
    components:{
        Student
    },
    data(){
        return{
            dialog:false
        }
    },
    methods:{
         close(){
            this.dialog = false
        },
    }
}
</script>