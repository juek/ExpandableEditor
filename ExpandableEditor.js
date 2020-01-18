$(function(){

  $(document).on('editor_area:loaded', function(){
    // let's abuse the obsolete gpui.ckx value ;o)
    (gpui.ckx > 0) && (gpui.ckx = -1);

    $('#ckeditor_wrap').toggleClass('ckeditor_expanded', !!gpui.ckx);

    $(  '<div id="ckeditor_toggle_size">'
      +   '<a data-cmd="ToggleEditorSize">'
      +     '<i title="expand editor" class="fa fa-plus-square-o"></i>'
      +     '<i title="shrink editor" class="fa fa-minus-square-o"></i>'
      +   '</a>'
      + '</div>').insertAfter('#ckeditor_wrap #cktoggle');
  });

  $gp.links.ToggleEditorSize = function(){
    $('#ckeditor_wrap').toggleClass('ckeditor_expanded');
    gpui.ckx = $('#ckeditor_wrap').hasClass('ckeditor_expanded') ? -1 : 0;
    $gp.SaveGPUI();
  };

  $(document).on('editor:loaded', function(evt, data){
    // console.log('data:', data);
    if( data.section_type == 'text' ){
      $('a[data-cmd="ToggleEditorSize]').css('visibility', 'hidden');
      $('#ckeditor_wrap').addClass('overrule_ckeditor_expanded');
    }else{
      $('a[data-cmd="ToggleEditorSize]').css('visibility', 'visible');
      $('#ckeditor_wrap').removeClass('overrule_ckeditor_expanded');
    }
  });

});
