<template>
  <!-- 列筛选按钮 -->
  <el-popover
    placement="bottom-end"
    width="150"
    trigger="click">
    <el-button
      slot="reference"
      size="mini"
      icon="el-icon-s-grid">
      <i
        class="fa fa-caret-down"
        aria-hidden="true" />
    </el-button>
    <el-checkbox
      v-model="allColumnsSelected"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange">
      全选
    </el-checkbox>
    <el-checkbox
      v-for="col in columns"
      :key="col.prop"
      v-model="col.show"
      @change="handleCheckedTableColumnsChange(col)"
    >
      {{ col.label }}
    </el-checkbox>
  </el-popover>
</template>

<script>
export default {
  name: 'ColumnFilter',
  props: {
    columns: {
      type: Array,
      default: () => { [] }
    }
  },
  data() {
    return {
      allColumnsSelected: true,
      isIndeterminate: false
    }
  },
  methods: {
    // 全选
    handleCheckAllChange() {
      this.allColumnsSelected = true;
      this.isIndeterminate = false;
      this.updateTableColumns();
      this.setColumnsInfoToLocalStorage();
    },

    // 列check
    handleCheckedTableColumnsChange(column) {
      // if (!column.show) {
      //   this.isIndeterminate = true;
      // }

      let count = 0;
      this.columns.forEach(col => {
        if (col.show) {
          count++;
        }
      });
      if (count === 0) {
        this.$message.warning('至少选中一列');
        this.$nextTick(() => {
          column.show = true;
        });
      }
      this.isIndeterminate = count !== this.columns.length;

      this.setColumnsInfoToLocalStorage();
    },

    // 更新表格列显示
    updateTableColumns() {
      this.columns.forEach(col => {
        if (!col.show) {
          col.show = true;
        }
      });
    },

    // 更新缓存
    setColumnsInfoToLocalStorage() {
      localStorage.setItem('columnsInfo', JSON.stringify(this.columns));
    }
  },
}
</script>

<style>

</style>