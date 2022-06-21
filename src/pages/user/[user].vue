<script setup lang="ts">
import { getParams } from "~/data";
const paramsTag: any = getParams("user");

console.log(paramsTag);
</script>

<style>
/* modules */
@import url(https://d3g0gp89917ko0.cloudfront.net/v--291054f06006/common--modules/css/userinfo/UserInfoModule.css);

/* bootstrap */
@import url(https://d3g0gp89917ko0.cloudfront.net/v--291054f06006/common--bootstrap/3.0.0/bootstrap.min.css);

/* theme */
@import url(https://d3g0gp89917ko0.cloudfront.net/v--291054f06006/common--theme/bootstrap-base/css/style.css);
@import url(https://www.wdfiles.com/local--theme/wikidot-3-0-content-nosidebar/style.css);
#header {
  display: none;
}
div#container-wrap {
  background: unset;
}
h1.profile-title {
  color: unset;
}
</style>
<template>
  <div class="container">
    <div class="topbar">
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <div class="site-name">
              <a class="navbar-brand" href="/"></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="col-md-3">
      <ul id="ui-tabs" class="nav nav-pills nav-stacked">
        <li class="active">
          <a id="ui-profile-b" href="javascript:;">Profile</a>
        </li>
        <li><a id="ui-member-b" href="javascript:;">Member of</a></li>
        <li><a id="ui-moderator-b" href="javascript:;">Moderator of</a></li>
        <li><a id="ui-admin-b" href="javascript:;">Admin of</a></li>
        <li>
          <a id="ui-contrib-b" href="javascript:;">Recent contributions</a>
        </li>
        <li>
          <a id="ui-posts-b" href="javascript:;">Recent posts and comments</a>
        </li>
      </ul>
    </div>

    <div class="col-md-9">
      <a class="btn btn-default btn-xs" href="javascript:;">
        <i class="icon-edit"></i>
        Write private message
      </a>
      <a class="btn btn-default btn-xs" href="javascript:;">
        <i class="icon-book"></i>
        Add to contacts
      </a>
      <a class="btn btn-danger btn-xs pull-right" href="javascript:;"
        >flag user as abusive</a
      >

      <h1 class="profile-title">
        <img src="https://www.wikidot.com/avatar.php?userid=-1" style="padding: 5px; vertical-align: -50%"/>
        {{ paramsTag }}
      </h1>

      <div id="user-info-area">
        <div class="profile-box">
          <dl class="dl-horizontal">
            <dt>Birthday:</dt>
            <dd></dd>
            <dt>Wikidot user since:</dt>
            <dd></dd>
            <dt>Account type:</dt>
            <dd></dd>
            <dt>Karma level:</dt>
            <dd>(<a href="http://www.wikidot.com/doc:karma" target="_blank">what is this?</a>)</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>