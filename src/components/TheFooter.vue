<template>
    <v-footer dark padless>
      <v-card flat tile class="blue white--text text-center" width="100%">
          <v-card-text>
              <v-btn v-for="(item, i) in socialMedias" :key="i" class="mx-4 white--text" icon :href="item.url" target="_blank">
                  <v-icon size="24px">
                    {{item.icon}}                  
                  </v-icon>
              </v-btn>
          </v-card-text>
          <v-card-text class="white--text pt-0">
            SOCOTEC has built its reputation over 60 years as an independent third party assisting companies in the areas of quality, health and safety, and the environment. 
            Through its inspection and measurement, assistance and consultancy, and training and certification services,
            SOCOTEC helps to optimize the performance of companies in every sector by managing the risks inherent in their activities.
            With consolidated revenue of €900 million, operations in 23 countries, 200,000 clients, 9,000 employees and over 250 forms of external recognition, 
            the SOCOTEC Group is a major player in risk prevention.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="white--text">
            {{new Date().getFullYear()}} - <strong>Amine BENLAMA</strong>
          </v-card-text>
      </v-card>    
    </v-footer>
  </template>
  
  <script lang="js">
  export default {
    name:'TheFooter',
    data() {
      return {
        socialMedias:[
          {
            icon:'mdi-youtube',
            url: 'https://www.youtube.com/channel/UC4a-XvZDOaPJCglRJrcT76Q'
          },
          {
            icon: 'mdi-twitter',
            url: 'https://twitter.com/socotec_france'
          },
          {
            icon: 'mdi-linkedin',
            url: 'https://www.linkedin.com/company/socotec/?original_referer=https%3A%2F%2Fwww.socotec.fr%2F'
          },
          {
            icon: 'mdi-vimeo',
            url: 'https://vimeo.com/user101199070'
          }
        ]
      }
    },
  }
  </script>
  
  <style>
  
  </style>