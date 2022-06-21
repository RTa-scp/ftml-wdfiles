<template>
  <div id="header">
    <h1>
      <a href="/" class="active"><span>Wdfiles Saving</span></a>
    </h1>
    <h2><span></span></h2>
    <div id="search-top-box" class="form-search">
      <form id="search-top-box-form" action="dummy" class="input-append">
        <input
          id="search-top-box-input"
          class="text empty search-query"
          type="text"
          size="15"
          name="query"
          value="Search this site"
          onfocus="if(YAHOO.util.Dom.hasClass(this, 'empty')){YAHOO.util.Dom.removeClass(this,'empty'); this.value='';}"
        /><input
          class="button btn"
          type="submit"
          name="search"
          value="Search"
        />
      </form>
    </div>
    <!--top  bar-->
    <Top />
    <!--top  bar-->
    <div id="login-status">
      <span class="wj-user-info printuser">
        <a class="wj-user-info-link" href="javascript:;">
          <span class="wj-karma" data-karma="5">
            <svg class="wj-sprite sprite-wj-karma" viewBox="0 0 64 114">
              <use href="/files--static/media/ui.svg#wj-karma"></use>
            </svg>
          </span>
          <img
            class="wj-user-info-avatar small"
            src="/files--static/media/default-avatar.png"
            alt="Default"
          /> </a
        >Default</span
      >
      | <a id="my-account" href="javascript:;">My accounts</a>
      <a id="account-topbutton" href="javascript:;">▼</a>
      <div id="account-options" style="display: none">
        <ul>
          <li>
            <a href="https://www.wikidot.com/account/activity">Activity</a>
          </li>
          <li>
            <a href="https://www.wikidot.com/account/messages">Messages</a>
          </li>
          <li><a href="https://www.wikidot.com/account/sites">Sites</a></li>
          <li>
            <a href="https://www.wikidot.com/account/settings">Settings</a>
          </li>
          <li><a href="https://www.wikidot.com/account/upgrade">Upgrade</a></li>
          <li><a href="javascript:;">Sign out</a></li>
        </ul>
      </div>
    </div>
    <div id="header-extra-div-1"><span></span></div>
    <div id="header-extra-div-2"><span></span></div>
    <div id="header-extra-div-3"><span></span></div>
  </div>
</template>