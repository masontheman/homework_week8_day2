import React,{useState,useEffect} from 'react'

export default function API() {
    const [people,setPeople] = useState([]);
    useEffect(() =>{fetch('https://scratched-juniper-salto.glitch.me/kekambas').then(res => res.json()).then(res => {setPeople(res);})},[]);
  return (<>
    <div></div>
    {people.map((peep,x) => <p key={x}>{peep.first_name} {peep.last_name}</p>)}
    </>
  );
}
