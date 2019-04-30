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
          Bid_Due_Date__c: '',
          Name: ''
        },
      ],
    };
  },
  computed: {
    attributes() {
      return this.oppDates.map(opp => (
        {
          highlight: {
            backgroundColor: '#ff7f5f',
          },
          dates: new Date(opp.Bid_Due_Date__c),
          popover: {
            label: opp.Name,
          }
        })
      );
    }
  },
  created() {
    let uri = '/bidDue';
    if (process.env.NODE_ENV != 'production') {
      uri = 'http://localhost:4000/bidDue';
    }
    this.axios.get(uri, {withCredentials: true})
      .then(response => {
        this.oppDates = response.data;
      })
      .catch(() => {
        console.log('bidDue catch');
      });
  }
};
</script>

<style scoped>

</style>
