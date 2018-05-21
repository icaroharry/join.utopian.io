import 'babel-polyfill';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'gsap';
import Cookies from 'js-cookie';
import ModalVideo from 'modal-video';
import 'modal-video/css/modal-video.min.css';
import 'hamburgers';
import 'hamburgers/dist/hamburgers.min.css';

import './../shared/main.css';
import './../shared/mobile.css';
import '../smoothscroll'
import '../sliders';
import '../sliders.css';

const $ = require('jquery');
const helpers = require('./helpers');

// enable bootstrap tooltips
$('[data-toggle="tooltip"]').tooltip();

// enable video modals
new ModalVideo('.video-button');

// change hamburger button state
const hamburger = $('.hamburger--minus');
$('#navbarSupportedContent').on('hide.bs.collapse', function () {
  hamburger.removeClass('is-active');
}).on('show.bs.collapse', function () {
  hamburger.addClass('is-active');
});

// contribution categories
const contributionCategories = $('#contribution-categories');
let stopLeaveContributionCategory = false,
    hoveringContributionCategory = false;
$(document).on('mouseenter', '#contribution-categories .circle', function() {
  stopLeaveContributionCategory = true;
  hoveringContributionCategory = true;
  TweenMax.to(contributionCategories.find('.text'), .2, {opacity: 0, onComplete: () => {
    TweenMax.to(contributionCategories.find('.text-' + $(this).data('toggle')), .2, {opacity: 1, onComplete: () => {
      stopLeaveContributionCategory = false;
      if (!hoveringContributionCategory) {
        TweenMax.to(contributionCategories.find('.text'), .2, {opacity: 0, onComplete: () => {
          TweenMax.to(contributionCategories.find('.text-main'), .2, {opacity: 1, onComplete: () => {
            stopLeaveContributionCategory = false;
          }});
        }});
      }
    }});
  }});
});

$(document).on('mouseleave', '#contribution-categories .circle', function() {
  hoveringContributionCategory = false;
  if (!stopLeaveContributionCategory) {
    TweenMax.to(contributionCategories.find('.text'), .2, {opacity: 0, onComplete: () => {
      TweenMax.to(contributionCategories.find('.text-main'), .2, {opacity: 1, onComplete: () => {
        stopLeaveContributionCategory = false;
      }});
    }});
  }
});


$(document).on('click', '.circle', function(e) {
  e.preventDefault();
});

// faq - disabled until the new backend is ready

// $.ajax({
//   type: 'GET',
//   beforeSend: function(request) {
//     request.setRequestHeader("x-api-key", 'c5pEsMpYZY896r7USzhWdapIY7o1GEpj3QCEQZSN');
//     request.setRequestHeader("x-api-key-id", 'kvo2x1982b');
//     request.setRequestHeader("Content-Type", 'application/json');
//     request.setRequestHeader("Accept", 'application/json');
//   },
//   url: 'https://api.utopian.io/api/faq',
//   success: function(response) {
//     let faq = {};
//     for (let i = 0; i < response.results.length; i++) {
//       if (!faq.hasOwnProperty(response.results[i]['category'])) {
//         faq[response.results[i]['category']] = [];
//       }

//       faq[response.results[i]['category']].push(response.results[i]);
//     }

//     helpers.renderFaq('general', 'General', faq);
//     helpers.renderFaq('earning_rewards', 'Earning Rewards', faq);
//     helpers.renderFaq('sharing_contributions', 'Sharing Contributions', faq);
//     helpers.renderFaq('managing_projects', 'Managing Projects', faq);
//   }
// });

// remove cover
$(() => {
  $('#cover').fadeOut(function () {
    $(this).remove();
  });
});

Cookies.set('lp_visited', true, {domain: window.location.host.replace('join.', '')});