<template>
  <div class="tableContainer">
    <div class="titleBox">
      <div class="titleName">상품관리</div>
    </div>
    <div class="tableScroller">
      <table>
        <thead>
          <tr class="heading">
            <th>클릭버튼</th>
            <th>등록일</th>
            <th>대표이미지</th>
            <th>상품명</th>
            <th>상품코드</th>
            <th>상품번호</th>
            <th>판매가</th>
            <th>할인가</th>
            <th>판매여부</th>
            <th>진열여부</th>
            <th>할인여부</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="headingSecond">
            <td class="text-center">버튼</td>
            <td class="text-center">등록일</td>
            <td class="text-center">대표이미지</td>
            <td class="text-center">상품명</td>
            <td class="text-center">SBBBBBB</td>
            <td class="text-center">12312312</td>
            <td class="text-center">10,000</td>
            <td class="text-center">10,000</td>
            <td class="text-center">판매</td>
            <td class="text-center">진열</td>
            <td class="text-center">미할인</td>
            <td class="text-center">WEB</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tableContainer {
  padding-top: 35px;

  .titleBox {
    padding: 0 20px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;

    .titleName {
      font-size: 28px;
      color: #666;
      margin-right: 10px;
      font-weight: 300;
    }
  }
  .tableScroller {
    width: 100%;
    border: 1px solid #dddddd;
    margin: 10px 0 !important;

    .heading {
      width: 100%;
      th {
        width: 140px;
        height: 40px;
        background-color: #eee !important;
        border: 1px solid #ddd;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        padding: 10px;
        .text-center {
          width: 100%;
          text-align: center;
        }
      }
    }
    .headingSecond {
      width: 100%;
      td {
        width: 140px;
        height: 40px;
        border: 1px solid #ddd;
        font-size: 13px;
        font-weight: 300;
        text-align: center;
        padding: 10px;
      }
    }
  }
}
</style>