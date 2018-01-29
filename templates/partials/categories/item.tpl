<li component="categories/category" data-cid="{../cid}" data-numRecentReplies="1" class="row clearfix">
  <meta itemprop="name" content="{../name}">

  <div class="content col-xs-12 <!-- IF config.hideCategoryLastPost -->col-md-10 col-sm-12<!-- ELSE -->col-md-7 col-sm-9<!-- ENDIF config.hideCategoryLastPost -->">
    <div class="icon pull-left" style="{function.generateCategoryBackground}">
      <i class="fa fa-fw {../icon}"></i>
    </div>

    <h2 class="title">
      <!-- IMPORT partials/categories/link.tpl --><br/>
      <!-- IF ../descriptionParsed -->
      <span class="description">{../descriptionParsed}</span>
      <!-- ENDIF ../descriptionParsed -->
      <!-- IF !config.hideSubCategories -->
      {function.generateChildrenCategories}
      <!-- ENDIF !config.hideSubCategories -->
    </h2>
    <span class="visible-xs pull-right">
      <!-- IF ../teaser.timestampISO -->
      <a class="permalink" href="{../teaser.url}">
        <span class="timeago" title="{../teaser.timestampISO}"></span>
      </a>
      <!-- ENDIF ../teaser.timestampISO -->
    </span>
  </div>

  <!-- IF !../link -->
  <div class="category-stats-column">
    <div class="hidden-sm hidden-xs stats">
      <small>[[global:topics]]</small>
      <span class="{../unread-class} human-readable-number" title="{../totalTopicCount}">{../totalTopicCount}</span><br/>
    </div>
    <div class="hidden-sm hidden-xs stats">
      <small>[[global:posts]]</small>
      <span class="{../unread-class} human-readable-number" title="{../totalPostCount}">{../totalPostCount}</span><br/>
    </div>
  </div>
  <!-- IF !config.hideCategoryLastPost -->
  <div class="col-md-3 col-sm-3 teaser hidden-xs topic-teaser" component="topic/teaser">
    <!-- IMPORT partials/categories/lastpost.tpl -->
  </div>
  <!-- ENDIF !config.hideCategoryLastPost -->
  <!-- ENDIF !../link -->
</li>
