$('.editor__path-item[data-step="4"]').hide();
$('.editor-step--js').on('click', function(e){
    e.preventDefault();
    var step = $(this).data('step');

    $('.editor__code--active').removeClass('editor__code--active');
    $('.editor__code--step-'+step).addClass('editor__code--active');

    if(step == 1){
        $('.editor__path-item[data-step="2"]').hide();
        $('.editor__path-item[data-step="3"]').hide();
        $('.editor__path-item[data-step="4"]').hide();
        $('.editor__tabs').removeClass('editor__tabs--active');
    }
    if(step == 2){
        $('.editor__path-item[data-step="2"]').show();
        $('.editor__path-item[data-step="3"]').hide();
        $('.editor__path-item[data-step="4"]').hide();
        $('.editor__tabs').removeClass('editor__tabs--active');
    }
    if(step == 3){
        $('.editor__path-item[data-step="2"]').show();
        $('.editor__path-item[data-step="3"]').show ();
        $('.editor__path-item[data-step="4"]').hide();
        $('.editor__tabs').addClass('editor__tabs--active');
    }
    if(step == 4){
        $('.editor__path-item[data-step="2"]').show();
        $('.editor__path-item[data-step="4"]').show ();
        $('.editor__tabs').addClass('editor__tabs--active');
    }
    if(step == 3 || step == 4){
        var tab = $(this).html();
        $('.editor-tab--js').html(tab);
    }
});