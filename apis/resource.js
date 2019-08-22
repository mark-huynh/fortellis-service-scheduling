import appointments from './appointment.json'

export default {
    // fetchSchedule: async () => {
    //     var test = await fetch('https://api.fortellis.io/service/v3/appointments/', {
    //         method: 'GET',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //           'Subscription-ID': 'test',
    //           'Authorization': 'Bearer eyJraWQiOiJNX21VVmkwUDVFZXcyZUc3M0JmakxXXzU5all6MXg1dVBpd19oc0x0SENVIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmViU3V3ZXJ6NVM4OXA4YzVwak1mTmNoMEpwQWRaWTZIZ2FfZEdOX0Ntc2MiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LmZvcnRlbGxpcy5pby9vYXV0aDIvYXVzMXAxaXh5N1lMOGNNcTAycDciLCJhdWQiOiJhcGlfcHJvdmlkZXJzIiwiaWF0IjoxNTY2NDIyMDU1LCJleHAiOjE1NjY0MjU2NTUsImNpZCI6IkZBQTcyWktRQ3ZESHBXdWR3eGVPbExVdmYyUGJBSnYzIiwic2NwIjpbImFub255bW91cyJdLCJzdWIiOiJGQUE3MlpLUUN2REhwV3Vkd3hlT2xMVXZmMlBiQUp2MyJ9.b2C49RJ8MDY41K_ngMpe_XusCZrkMY7KEFMv_hjHjAp72dtR6uBwIttl_lnrgWBudsv4kbD7I2lHywa3SthQQfD_fFNxGkrO_0u34na5wptPUKWaGWkkGlDW0TudDYmgp2-r53NWdNJ9Ctsu7X1blrVYPmckzs8Dl8bAG2UUQte_A9c3bCqgN4iGL6brRytW_NXtiIRthoi_dID2QvYP87Gvoqlpzv_7kTiEqE9RkKG0EtqupStcOMOWrbcHw8PJ9TnA0PRKzdLeCbbrNtH58xu_CfQY-gF2qZPrmFoELCKzpkiGBDVdarVN8MJ-U8WenCzL5Mf7YpCMms8gbHxcwA'
    //         }
    //       });
    //     //   console.log(await test.json());
    //       return (await test.json());
    // },
    fetchSchedule: () => {
        return appointments;
    }
}