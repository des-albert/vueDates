<template>
  <v-calendar
    :attributes="attributes"
    is-double-paned
    is-expanded
  ></v-calendar>
</template>

<script>
export default {
  data() {
    return {
      oppDates: [
        {
          Id: '',
          ARO_Date__c: '',
          Name: ''
        },
      ],
    };
  },
  computed: {
    attributes() {
      return this.oppDates.map(opp => ({
        key: `oppDate.${opp.Id}`,
        highlight: {
          backgroundColor: '#5C66CD',
        },
        dates: new Date(opp.ARO_Date__c),
        popover: {
          label: opp.Name,
        }
      }));
    }
  },
  created() {
    let uri = '/aro';
    if (process.env.NODE_ENV != 'production') {
      uri = 'http://localhost:4000/aro';
    }
    this.axios.get(uri, {withCredentials: true})
      .then(response => {
        this.oppDates = response.data;
      })
      .catch(() => {
        console.log('get summary catch');
      });
  }
};
</script>

<style scoped>

</style>
