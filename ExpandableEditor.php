<?php 

defined('is_running') or die('Not an entry point...');

class ExpandableEditor {

  static function GetHead(){
    if( \gp\tool::LoggedIn() ){
      \gp\tool\Plugins::css('ExpandableEditor.css', false);
      \gp\tool\Plugins::js('ExpandableEditor.js', false);
    }
  }

}
