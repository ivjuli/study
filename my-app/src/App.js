import React, { Component } from 'react';
import Header from './components/Header/Header';
import Rombiki from './components/Rombiki/Rombiki';
import Footer from './components/Footer/Footer';
import {getAllLanguage} from '././helpers/api';
/*import {getAllmonth} from '././helpers/api';*/
import './App.css';

import {connect} from 'react-redux'



class App extends Component {

constructor() {
        super();

}

/*getData = async () => {
const lm = await Promise.all([getAllLanguage(), getAllmonth()]);
const language = lm[0];
const month = lm[1];
this.setState({language, month})
}*/

getData = async () => {
        const language = await getAllLanguage();
        this.setState({language})
        }


        renderDataM =  (m) => {
                let idmm = m;
                return this.props.month.map((el, ind) => {
                        while (el.idMonth == m){
                        return (
                                <div className="rombiki_raspisanie_mesiac">{el.nameMonth}</div>
                             ) 
                     }}
                )}

renderData =  (i) => {
        let idm = i;
        return this.props.language.map((el, ind) => {
                while (el.idMonth == i){
                return (
                     <div><li className="spisok">{el.startData}</li><li className="spisok">{el.namelanguage}</li><li className="spisok">{el.level}</li></div>
                     ) 
             }}
        )}
     
/*dataFilter = () => { let lname = name;
        const languageFilter = [...getAllLanguage];
        languageFilter.filter(el=>{return el.namelanguage == "исландский"}); 
}  */    

/*dataFilter = () => {
let languageFilter = [...getAllLanguage];
languageFilter.filter((el, ind) => {
       return (
        <div><li className="spisok">{el.startData}</li>
        <li className="spisok">{el.namelanguage =="исландский"}</li>
        <li className="spisok">{el.level}</li></div>);
        })}*/


/*getDataFilter = async () => {
        const languageFilter = await getAllLanguage();
        this.setState({languageFilter})
        }*/

/*const language = [...getAllLanguage]
language.filter((el) => {return el.namelanguage == "исланский"})


dataFilter2 = () => {
        return this.props.language.filter((el) => {return el.namelanguage == "исланский"})}*/

   /* filt = ()=> {    
let filL = getAllLanguage.filter(el => {return el.namelanguage == "исланский"})}


filt2 = ()=> {
const arr1 = [... [this.props.language]]
arr1.filter(el=>{return el.namelanguage == "исланский"})}

filt3 = ()=> {
        getAllLanguage.filter(el=>{return el.namelanguage == "исланский"})}*/


  render() {

/*console.log(this.dataFilter2());*/
/*console.log(this.filL());
console.log(this.arr1);
console.log(this.filt2());
console.log(this.filt3());*/


    return (
     
     <div className="App">
       
       <div className="wrapper">
       <Header/>
<div className="container_yaziki">
        <div className="text_yaziki"><p>КАКОЙ ЯЗЫК<br/>ХОТИТЕ ИЗУЧАТЬ?</p></div>

        
<div className="romb_norv" onClick={this.text_norv}>
    <div className="romb_norv_flex">
    <div className="text_norv_kub">НОРВЕЖСКИЙ</div>
    <div className="text_norv_kub_2">
        <a className="test" href="">Пройти входное тестирование</a>
        <div className="strelka"><img src="/img/arrow_black.svg" alt="arrow" width="20px" height="26px"/></div></div>
    </div>
</div>


<div className="romb_islan" onClick={console.log("shved")}>   
    <div className="foto_islan"><img src="/img/img_reykjavik.png" alt="reykjavik" width="255px" height="255px"/></div>    
    <div className="text_yaziki_romb">ИСЛАНСКИЙ</div>
</div> 
<div className="romb_shved" onClick={console.log("shved")}>
        <div className="foto_shved"><img src="/img/img_stokgolm.png" alt="stokgolm" width="255px" height="255px"/></div>
    <div className="text_yaziki_romb">ШВЕДСКИЙ</div>
</div> 
<div className="romb_fin" onClick={console.log("fin")}>
        <div className="foto_fin"><img src="/img/img_helsinki.png" alt="helsinki" width="255px" height="255px"/></div>
    <div className="text_yaziki_romb">ФИНСКИЙ</div>
</div> 
<div className="romb_dat" onClick={console.log("dat")}>
        <div className="foto_dat"><img src="/img/img_kopengagen.png" alt="kopengagen" width="255px" height="255px"/></div>
    <div className="text_yaziki_romb">ДАТСКИЙ</div>
</div> 
<div className="romb_bordo"></div>
<div className="romb_setyi">
<div className="romb_white">
        <div className="romb_siniy"></div>
</div>

</div>
        
    </div>

    <div className="container_yrovni" onClick={this.yroven_A1}>
            <div className="tex_yrovni">ВЫБЕРЕТЕ ВАШ УРОВЕННЬ ВЛАДЕНИЯ ЯЗЫКОМ</div>
            <div className="flex_yrovni">
                <div className="yrovni">
                    <div className="znachki"><img src="/img/rombik_white.svg" alt="rombik" width="30px" height="30px"/></div>
                <div className="flex_yrovni_text">
                    <div className="text_yrovni_vubor">Начинающий (A1)</div>
                    <div className="text_yrovni_vubor2">Можете достаточно свободно общаться на английском на отвлеченные темы, способны взаимодействовать с носителями языка без напряжения для каждой из сторон</div>
                </div>
                </div>
                <div className="yrovni" onClick={console.log("A2")}>
                        <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                    <div className="flex_yrovni_text">
                        <div className="text_yrovni_vubor">Начинающий (A2)</div>
                        <div className="text_yrovni_vubor2">В состоянии написать связное сообщение 
                                (эссе, письмо) на незнакомую вам тематику</div>
                    </div>
                    </div>
                    <div className="yrovni" onClick={console.log("B1")}>
                            <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                        <div className="flex_yrovni_text">
                            <div className="text_yrovni_vubor">Продолжающий (B1)</div>
                            <div className="text_yrovni_vubor2">Свободно смотрите большинство англоязычных телепрограмм: интервью, репортажи, ток-шоу, прямые трансляции
                                </div>
                        </div>
                        </div>
                        <div className="yrovni" onClick={console.log("B2")}>
                                <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                            <div className="flex_yrovni_text">
                                <div className="text_yrovni_vubor">Продолжающий (B2)</div>
                                <div className="text_yrovni_vubor2">Способны понять суть сложного текста на конкретную или абстрактную тему, готовы поддержать обстоятельную беседу 
                                        на английском языке на тему вашей профессиональной специализации</div>
                            </div>
                            </div>
                            <div className="yrovni" onClick={console.log("C1")}>
                                    <div className="znachki"><img src="/img/rombik_dvoinoi.svg" alt="rombik" width="65px" height="45px"/></div>
                                <div className="flex_yrovni_text">
                                    <div className="text_yrovni_vubor">Продвинутый (C1)</div>
                                    <div className="text_yrovni_vubor2">Умеете выстраивать ясные и подробные высказывания по широкому кругу вопросов; можете изложить свой взгляд на проблему, указать на преимущества и недостатки 
                                            различных вариантов ее решения
                                            
                                            </div>
                                </div>
                                </div>
                                <div className="yrovni" onClick={console.log("C2")}>
                                        <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                                    <div className="flex_yrovni_text">
                                        <div className="text_yrovni_vubor">Продвинутый (C2)</div>
                                        <div className="text_yrovni_vubor2">Умеете выстраивать ясные и подробные высказывания по широкому кругу вопросов; можете изложить свой взгляд на проблему, указать на преимущества и недостатки 
                                                различных вариантов ее решения
                                                
                                                </div>
                                    </div>
                                    </div>
            </div>
      
    </div>

    <div className="container_raspisanie">
    <div className="tex_raspisanie">РАСПИСАНИЕ СТАРТА КУРСОВ</div>
    <div className="tex_raspisanie2">Чтобы узнать дату первого занятия, выбирете язык и уровень выше</div>
    <div className="flex_raspisanie">
            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                     <ul className="raspisanie_spisok">
                     {this.renderData(2)}
                                          </ul></div>
               <div className="rombiki_raspisanie_mesiac">ФЕВРАЛЬ</div></div>
            </div>

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                     <ul className="raspisanie_spisok">
                     {this.renderData(3)}
                     </ul></div>
                    <div className="rombiki_raspisanie_mesiac">МАРТ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <ul className="raspisanie_spisok">
                    {this.renderData(4)}
                     </ul></div>
                    <div className="rombiki_raspisanie_mesiac">АПРЕЛЬ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <ul className="raspisanie_spisok">
                    {this.renderData(5)}
                     </ul></div>
                    <div className="rombiki_raspisanie_mesiac">МАЙ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <ul className="raspisanie_spisok">
                    {this.renderData(6)}
                     </ul></div>
                    <div className="rombiki_raspisanie_mesiac">ИЮНЬ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <ul className="raspisanie_spisok">
                     {this.renderData(7)}
                     </ul></div>
                    <div className="rombiki_raspisanie_mesiac">ИЮЛЬ</div></div>
                    <div className="flex_zapisi">
                            <div className="flex_zapis left"><div className="flex_zapis_text">ЗАПИСАТЬСЯ<br/>В ГРУППУ</div>
                            <div></div>
                            </div>
                            <div className="flex_zapis right"><div className="flex_zapis_text">ДОБАВИТЬ<br/>В КАЛЕНДАРЬ</div>
                            </div>
                           </div> </div> </div>
   </div>
   <Footer/>
 </div></div>


    );
  }
}

export default connect(
        (store) =>{
                return{
                        language: store.language,
                        /*month: store.month,*/
                };
        },

)(App);
