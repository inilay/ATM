import React, { useEffect, useState, Fragment } from "react";
import BracketWrapper from "./UI/BracketWrapper/BracketWrapper";
import { Bracket, SeedsList, Round } from "./rounds";
import { Seed, SeedItem, SeedTeam, SeedTime, SingleLineSeed } from "./UI/seed";
import MyMatch from "./UI/MyMatch/MyMatch";


const DoubleEl = ({bracket, id, owner}) => {
    const [upperRounds, setUpperRounds] = useState(bracket.upper_rounds)
    const [lowerRounds, setLowerRounds] = useState(bracket.lower_rounds)
  
    const handleBracketChange = (data) => {
        setUpperRounds(data)
    }

    console.log(bracket)
    // setB(rounds.shift())

      
    return (
        <>
       
            <Bracket mobileBreakpoint={992}>
                {bracket.upper_rounds.map((round) => 
                    <Round key={round.title} mobileBreakpoint={992}>
                        <SeedsList>
                            {round.seeds.map((seed, idx) => 
                            <MyMatch key={idx} owner={owner} id={id} seed={seed} onPatch={handleBracketChange}/>
                            )}
                        </SeedsList>
                    </Round>
                )}
            </Bracket>
             <Bracket mobileBreakpoint={992}>
             {bracket.lower_rounds.map((round) => 
                 <Round key={round.title} mobileBreakpoint={992}>
                     <SeedsList>
                        {round === bracket.lower_rounds[0]
                            ? round.seeds.map((seed, idx) => 
                                <MyMatch key={idx} owner={owner} id={id} seed={seed} onPatch={handleBracketChange} single={true}/>)
                            : round.seeds.map((seed, idx) => 
                                <MyMatch key={idx} owner={owner} id={id} seed={seed} onPatch={handleBracketChange}/>)
                        }
                         
                     </SeedsList>
                 </Round>
             )}
         </Bracket>
       
        </>
    )};


  export default DoubleEl;
