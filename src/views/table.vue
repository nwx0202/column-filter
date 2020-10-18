<template>
  <div class="container">
    <!-- 列筛选按钮 -->
    <ColumnFilter
      :columns="columns">
    </ColumnFilter>

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
import ColumnFilter from '@/components/filter'
export default {
  name: 'Table',
  components: {
    ColumnFilter
  },
  data() {
    return {
      allColumnsSelected: true,
      allColumnsSelectedIndeterminate: false,
      columns: [{
        prop: "custId",
        fixed: true,
        width: "90",
        sortable: true,
        label: "客户号",
        show: true
      },
      {
        prop: "payAcctName",
        width: "100",
        sortable: true,
        label: "客户名称",
        show: true
      },
      {
        prop: "merchantId",
        width: "90",
        sortable: true,
        label: "商户号",
        show: true
      },
      {
        prop: "merchantName",
        width: "100",
        sortable: true,
        label: "商户名称",
        show: true
      },
      {
        prop: "operationNo",
        width: "100",
        sortable: true,
        label: "运营机构",
        show: true
      },
      {
        prop: "operTime",
        width: "100",
        sortable: true,
        label: "交易时间",
        show: true
      },
      {
        prop: "serialId",
        width: "120",
        sortable: true,
        label: "交易流水号",
        show: true
      },
      {
        prop: "recAcct",
        width: "100",
        sortable: true,
        label: "收款账号",
        show: true
      },
      {
        prop: "terminalNo",
        width: "90",
        sortable: true,
        label: "终端号",
        show: true
      },
      {
        prop: "operAmount",
        width: "130",
        sortable: true,
        label: "交易金额(元)",
        show: true
      },
      {
        prop: "bizCode",
        width: "100",
        sortable: true,
        label: "业务类型",
        show: true
      },
      {
        prop: "cardNo",
        width: "100",
        sortable: true,
        label: "银行卡号",
        show: true
      },
      {
        prop: "cardProv",
        width: "130",
        sortable: true,
        label: "银行卡归属省",
        show: true
      },
      {
        prop: "recAcctProv",
        width: "130",
        sortable: true,
        label: "收款卡归属省",
        show: true
      },
      {
        prop: "operStatus",
        width: "100",
        sortable: true,
        label: "交易状态",
        show: true
      }]
    }
  },
  computed: {
    checkedColumns() {
      this.getColumns();
      return this.columns.filter(col => col.show);
    }
  },
  methods: {
    getColumns() {
      const columnsInfo = localStorage.getItem('columnsInfo');
      if (columnsInfo) {
        this.columns = JSON.parse(columnsInfo);
      }
    }
  },
}
</script>

<style>

</style>