import Card from './Card'

function App() {
  let data=[
    {
      plan:'Free',
      
      price:'$0',
      users:'Single User',
      isUser:true,
      storage:'5GB storage',
      isStorage:true,
      publicProjects:'Unlimited Public Projects',
      isPublicProject:true,
      access:'Community Access',
      isAccess:true,
      private:'Unlimited Private Projects',
      isPrivate:false,
      phoneSupport:'Dedicated Phone Support',
      isSupport:false,
      domain:'',
      subDomain:'Free Subdomain',
      isSubDomain:false,
      reports:'Monthly Status Reports',
      isReports:false
    },
    {
      plan:'PLUS',
      price:'$9',
      users:'5 Users',
      isUser:true,
      storage:'50GB storage',
      isStorage:true,
      publicProjects:'Unlimited Public Projects',
      isPublicProject:true,
      access:'Community Access',
      isAccess:true,
      private:'Unlimited Private Projects',
      isPrivate:true,
      phoneSupport:'Dedicated Phone Support',
      isSupport:true,
      domain:'',
      subDomain:'Free Subdomain',
      isSubDomain:true,
      reports:'Monthly Status Reports',
      isReports:false
    },
    {
      plan:'PRO',
      price:'$49',
      users:'Unlimited Users',
      isUser:true,
      storage:'150GB storage',
      isStorage:true,
      publicProjects:'Unlimited Public Projects',
      isPublicProject:true,
      access:'Community Access',
      isAccess:true,
      private:'Unlimited Private Projects',
      isPrivate:true,
      phoneSupport:'Dedicated Phone Support',
      isSupport:true,
      domain:'Unlimited',
      subDomain:' Free Subdomain',
      isSubDomain:true,
      reports:'Monthly Status Reports',
      isReports:true,
    }
  ]
  return <> 
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
     }
    </div>
  </div>
</section>
</>
}

export default App
