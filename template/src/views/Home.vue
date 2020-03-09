<template>
  <%_ if (options.ui === 'element-ui') { _%>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
  <%_ } _%>
  <%_ if (options.ui === 'iview') { _%>
  <Layout class="home">
    <Header>Header</Header>
    <Layout class="content">
      <Sider hide-trigger>Sider</Sider>
      <Layout>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Layout>
  <%_ } _%>
  <%_ if (options.ui === 'none') { _%>
  <h1>首页</h1>
  <%_ } _%>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="stylus" scoped>
<%_ if (options.ui === 'element-ui') { _%>
.el-container:first-child
  height 100vh
}
.el-header, .el-footer
  background-color #B3C0D1
  color #333
  text-align center
  line-height 60px
.el-aside
  background-color #D3DCE6
  color #333
  text-align center
  line-height 200px
.el-main
  background-color #E9EEF3
  color #333
  text-align center
  line-height 160px
<%_ } _%>
<%_ if (options.ui === 'iview') { _%>
.home
  height 100vh
  color #ffffff
.content
  flex-direction row
.ivu-layout-header
  background-color #2d8cf0
.ivu-layout-footer
  background-color #808695
  color #ffffff
<%_ } _%>
</style>
