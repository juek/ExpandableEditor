$(function(){

  $(document).on('editor_area:loaded', function(){
    // let's abuse the obsolete gpui.ckx value ;o)
    (gpui.ckx > 0) && (gpui.ckx = -1);

    $('#ckeditor_wrap').toggleClass('ckeditor_expanded', !!gpui.ckx);

    $(  '<a id="ckeditor_toggle_size" data-cmd="ToggleEditorSize">'
      +   '<i title="expand editor" class="fa fa-plus-square-o"></i>'
      +   '<i title="shrink editor" class="fa fa-minus-square-o"></i>'
      + '</a>').insertAfter('#ckeditor_wrap #cktoggle');
  });

  $gp.links.ToggleEditorSize = function(){
    $('#ckeditor_wrap').toggleClass('ckeditor_expanded');
    gpui.ckx = $('#ckeditor_wrap').hasClass('ckeditor_expanded') ? -1 : 0;
    $gp.SaveGPUI();
  };

});
