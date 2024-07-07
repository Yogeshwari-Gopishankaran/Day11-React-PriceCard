

function Card(props) {
  return <>
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">{props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li class={props.data.isUser?"":"text-muted"}><span className="fa-li"><i className={props.data.isUser?"fas fa-check":"fas fa-times"}></i></span>{props.data.plan==="Free"? props.data.users:<b>{props.data.users}</b>}</li>
              <li class={props.data.isStorage?"":"text-muted"}><span className="fa-li"><i className={props.data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li class={props.data.isPublicProject?"":"text-muted"}><span className="fa-li"><i className={props.data.isPublicProject?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicProjects }</li>
              <li class={props.data.isAccess?"":"text-muted"}><span className="fa-li"><i className={props.data.isAccess?"fas fa-check":"fas fa-times"}></i></span>{props.data.access}</li>
              <li class={props.data.isPrivate?"":"text-muted"}><span className="fa-li"><i className={props.data.isPrivate?"fas fa-check":"fas fa-times"}></i></span>{props.data.private}</li>
              <li class={props.data.isSupport?"":"text-muted"} ><span className="fa-li"><i className={props.data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{props.data.phoneSupport}</li>
              <li class={props.data.isSubDomain?"":"text-muted"}><span className="fa-li"><i className={props.data.isSubDomain?"fas fa-check":"fas fa-times"}></i></span>{props.data.plan==="PRO"?<><b>Unlimited</b>{props.data.subDomain}</>:props.data.subD
              omain} </li>
              <li class={props.data.isReports?"":"text-muted"}><span className="fa-li"><i className={props.data.isReports?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports}</li>
              
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Card
