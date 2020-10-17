<template>
  <div class="container">
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
        :indeterminate="allColumnsSelectedIndeterminate"
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

    <el-table
      ref="multipleTable"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        v-for="(col) in checkedColumns"
        :key="col.prop"
        :prop="col.prop"
        :width="col.width"
        :sortable="col.sortable"
        :label="col.label">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ColumnFilter',
  data() {
    return {
      allColumnsSelected: true,
      allColumnsSelectedIndeterminate: false,
      columns: [{
        prop: "custId",
        fixed: true,
        width: "150",
        sortable: true,
        label: "客户号",
        show: true
      },
      {
        prop: "payAcctName",
        width: "150",
        sortable: true,
        label: "客户名称",
        show: true
      },
      {
        prop: "merchantId",
        width: "150",
        sortable: true,
        label: "商户号",
        show: true
      },
      {
        prop: "merchantName",
        width: "150",
        sortable: true,
        label: "商户名称",
        show: true
      },
      {
        prop: "operationNo",
        width: "150",
        sortable: true,
        label: "运营机构",
        show: true
      },
      {
        prop: "operTime",
        width: "150",
        sortable: true,
        label: "交易时间",
        show: true
      },
      {
        prop: "serialId",
        width: "150",
        sortable: true,
        label: "交易流水号",
        show: true
      },
      {
        prop: "recAcct",
        width: "150",
        sortable: true,
        label: "收款账号",
        show: true
      },
      {
        prop: "IP",
        width: "150",
        sortable: true,
        label: "operIp",
        show: true
      },
      {
        prop: "operDfp",
        width: "150",
        sortable: true,
        label: "设备指纹",
        show: true
      },
      {
        prop: "terminalNo",
        width: "150",
        sortable: true,
        label: "终端号",
        show: true
      },
      {
        prop: "operAmount",
        width: "150",
        sortable: true,
        label: "交易金额(元)",
        show: true
      },
      {
        prop: "bizCode",
        width: "150",
        sortable: true,
        label: "业务类型",
        show: true
      },
      {
        prop: "cardNo",
        width: "150",
        sortable: true,
        label: "银行卡号",
        show: true
      },
      {
        prop: "cardProv",
        width: "150",
        sortable: true,
        label: "银行卡归属省",
        show: true
      },
      {
        prop: "recAcctProv",
        width: "150",
        sortable: true,
        label: "收款卡归属省",
        show: true
      },
      {
        prop: "operStatus",
        width: "150",
        sortable: true,
        label: "交易状态",
        show: true
      },
      {
        prop: "bizChannel",
        width: "150",
        sortable: true,
        label: "业务渠道",
        show: true
      }]
    }
  },
  computed: {
    checkedColumns() {
      return this.columns.filter(col => col.show);
    }
  },
  methods: {
    // 全选
    handleCheckAllChange() {
      console.log('全选');
    },
    handleCheckedTableColumnsChange(col) {
      console.log(col);
    }
  },
}
</script>

<style>

</style>