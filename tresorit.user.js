// ==UserScript==
// @name         Tresorit Send Button for Gmail
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Adds a small button to Gmail to open Tresorit Send in a new popup tab
// @author       myfta
// @match        https://mail.google.com/*
// @grant        GM_log
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function addButton() {
        // Check if button already exists
        if (document.getElementById('tresorit-send-button')) {
            return;
        }

        // Create a container div for better control
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 999999;
            width: 50px;
            height: 50px;
        `;

        // Create the button element
        const button = document.createElement('button');
        button.id = 'tresorit-send-button';
        button.title = 'Open Tresorit Send';
        button.textContent = '📤';
        
        // Style the button to be small and visible
        button.style.cssText = `
            width: 100%;
            height: 100%;
            padding: 0;
            background-color: #1f2937;
            color: white;
            border: 2px solid #4CAF50;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
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
        button.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.open('https://send.tresorit.com/', 'TresortiSend', 'width=800,height=600,resizable=yes,scrollbars=yes');
        };
        
        // Append button to container and container to page
        container.appendChild(button);
        document.body.appendChild(container);
        
        console.log('Tresorit Send button added successfully');
    }

    // Try to add button when DOM is ready
    if (document.body) {
        addButton();
    } else {
        document.addEventListener('DOMContentLoaded', addButton);
    }

    // Also try again after a short delay to ensure it loads
    setTimeout(addButton, 1000);
})();