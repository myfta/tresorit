// ==UserScript==
// @name         Tresorit Send Button for Gmail
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Adds a small button to Gmail to open Tresorit Send in a new popup tab
// @author       myfta
// @match        https://mail.google.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Create a small, minimalist button
    const button = document.createElement('button');
    button.id = 'tresorit-send-button';
    button.title = 'Open Tresorit Send';
    button.innerHTML = '📤';
    
    // Style the button to be small and unobtrusive
    button.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 10000;
        width: 40px;
        height: 40px;
        padding: 0;
        background-color: #1f2937;
        color: white;
        border: 1px solid #4CAF50;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        font-family: Arial, sans-serif;
    `;
    
    // Add hover effect
    button.onmouseover = function() {
        this.style.backgroundColor = '#4CAF50';
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 4px 12px rgba(76, 175, 80, 0.4)';
    };
    button.onmouseout = function() {
        this.style.backgroundColor = '#1f2937';
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    };
    
    // Add click handler to open Tresorit Send in a new popup tab
    button.onclick = function() {
        window.open('https://send.tresorit.com/', 'TresortiSend', 'width=800,height=600,resizable=yes,scrollbars=yes');
    };
    
    // Append button to the page
    document.body.appendChild(button);
})();