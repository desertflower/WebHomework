<template>
    <!--
    <div id="employee-table">
        <table>
            <thead>
            <tr>
                <th>Employee name</th>
                <th>Employee email</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Richard Hendricks</td>
                <td>richard@piedpiper.com</td>
            </tr>
            <tr>
                <td>Bertram Gilfoyle</td>
                <td>gilfoyle@piedpiper.com</td>
            </tr>
            <tr>
                <td>Dinesh Chugtai</td>
                <td>dinesh@piedpiper.com</td>
            </tr>
            </tbody>
        </table>
    </div>
    -->
    <div id="employee-table">
        <table>
            <!-- ...thead... -->
            <tbody>
            <tr v-for="employee in employees" :key="employee.id">
                <td>{{ employee.name }}</td>
                <td>{{ employee.email }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'employee-table',
    props: {
      employees: Array,
    },
  }
</script>

<style scoped>

</style>