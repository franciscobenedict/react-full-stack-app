import md5 from 'md5';

export const defaultState = {
  users:[
    {
      id:"U1",
      name:"Dev",
      passwordHash: md5("TUPLES")
    },{
      id:"U2",
      name:"C. Eeyo",
      passwordHash: md5("PROFITING")
    }
  ],
  groups:[
    {
      name:"To Do",
      id:"G1",
      owner:"U1"
    },{
      name:"Doing",
      id:"G2",
      owner:"U1"
    },{
      name:"Done",
      id:"G3",
      owner:"U1"
    },{
      name:"Other",
      id:"G4",
      owner:"U2"
    }
  ],
  tasks:[
    {
      name:"Refactor tests",
      id:"T1",
      group:"G1",
      owner:"U1",
      isComplete:false
    },{
      name:"Meet with CTO",
      id:"T2",
      group:"G1",
      owner:"U1",
      isComplete:true
    },{
      name:"Compile ES6",
      id:"T3",
      group:"G2",
      owner:"U1",
      isComplete:false
    },{
      name:"Update component snapshot",
      id:"T4",
      group:"G2",
      owner:"U1",
      isComplete:true
    },{
      name:"Production optimizations",
      id:"T5",
      group:"G3",
      owner:"U1",
      isComplete:false,
    },{
      name:"THIS IS MR C EEYO ONLY",
      id:"T6",
      group:"G4",
      owner:"U2",
      isComplete:false
    }
  ],
  comments:[
    {
      owner:"U1",
      id:"C1",
      task:"T1",
      content:"Great work!!!"
    },{
      owner:"U1",
      id:"C2",
      task:"T2",
      content:"New comment!!!"
    },{
      owner:"U2",
      id:"C3",
      task:"T6",
      content:"A comment by Mr C Eeyo!!!"
    }
  ]
}
