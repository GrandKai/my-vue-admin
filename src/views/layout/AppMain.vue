<template>
    <div>
      <p>get count from computed: {{countC}}</p>
      <p>get count from import getters: {{countG}}</p>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import store from '../../store'

  export default {
    data () {
      return {}
    },

    methods: {},
    computed: {
      ...mapGetters(['countEG', 'countG']),
      countC: () => store.state
    },
    mounted () {
    }
  }
</script>
