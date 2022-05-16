'use strict';

// Code for dialog popup
const openDialog = document.getElementById('openDialog');
const closeDialog = document.getElementById('closeDialog');
const dialogModal = document.querySelector('dialog');

openDialog.addEventListener('click', function () {
    /*
        Apperently there are several different code to do the same thing; opening the dialog.
        Here are the recommended to use:
            .show()
            .showModal()
    */
    dialogModal.showModal();
});

closeDialog.addEventListener('click', function () {
    dialogModal.close();
});

