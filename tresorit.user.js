// ==UserScript==
// @name         Tresorit Send Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button to open Tresorit Send in a new popup tab
// @author       myfta
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Create the button element
    const button = document.createElement('button');
    button.id = 'tresorit-send-button';
    button.textContent = '📤 Tresorit Send';
    
    // Style the button
    button.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 10px 15px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background-color 0.3s ease;
        font-family: Arial, sans-serif;
    `;
    
    // Add hover effect
    button.onmouseover = function() {
        this.style.backgroundColor = '#45a049';
    };
    button.onmouseout = function() {
        this.style.backgroundColor = '#4CAF50';
    };
    
    // Add click handler to open Tresorit Send in a new popup tab
    button.onclick = function() {
        window.open('https://send.tresorit.com/', 'TresortiSend', 'width=800,height=600,resizable=yes,scrollbars=yes');
    };
    
    // Append button to the page
    document.body.appendChild(button);
})();
