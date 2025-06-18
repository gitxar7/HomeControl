/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

async function test(){
     const response = await fetch("LoadHistory");
     if (response.ok) {
        const json = await response.json();
        console.log(json);
    }
}


