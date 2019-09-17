import React from 'react'
import SectionTitle from '../Molecules/SectionTitle'
import team1 from '../../img/4-team1.jpg'
import team2 from '../../img/5-team2.jpg'
import team3 from '../../img/6-team3.jpg'
import team4 from '../../img/7-team4.jpg'

import TeamItem from '../Molecules/TeamItem'



const Team = () => {
  return ( 
    <section className="section-team p-section">
      <SectionTitle small='Our Team' big='OUR EXPERT MINDS'/>
      <div className="section-team__grid break-points">
        <TeamItem image={team1} name='ROBERT' ocupation='Business Planer'/>
        <TeamItem image={team2} name='POLLARD' ocupation='Business Dealer'/>
        <TeamItem image={team3} name='BILLINGS' ocupation='Business Manager'/>
        <TeamItem image={team4} name='BRAVO' ocupation='Sales Manager'/>
      </div>
    </section>
   );
}
 
export default Team;