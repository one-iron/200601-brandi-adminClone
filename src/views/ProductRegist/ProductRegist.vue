<template>
    <div id="app">
        <div class="ProductRegist">
            <div class="page_content">
                <h3 class="page_title">
                    상품등록
                    <small>상품 정보 등록</small>
                </h3>
                <div class="page_bar">
                    <ul class="page_ul">
                        <div class="h2 mb-0">
                            <i class="xi-home-o" style="color: black;" />
                        </div>
                        <li class="li-tag">상품관리 ></li>
                        <li class="li-tag">상품 관리 ></li>
                        <li class="li-tag">상품 등록</li>
                    </ul>
                </div>
                <div class="portlet">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="xi-pen-o" style="color: black;" />
                            <span>기본정보</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <table class="table-in-portlet">
                                <tbody>
                                    <tr>
                                        <td class="seller-choice default-info-left" width="15%">
                                            셀러선택
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <td style="width:300px; display: flex;">
                                            <b-form-input
                                                style="margim:20px 30px; width:250px; border:none"
                                                v-model="text"
                                                placeholder="셀러를 검색해주세요"
                                                class="search_seller"
                                                readonly
                                            />
                                            <v-app id="inspire" style="height:50px;">
                                                <v-row>
                                                    <v-dialog
                                                        v-model="dialog"
                                                        persistent
                                                        max-width="500"
                                                    >
                                                        <template v-slot:activator="{ on }">
                                                            <v-btn
                                                                color="green"
                                                                dark
                                                                v-on="on"
                                                                style="margin-left:30px;"
                                                            >셀러 검색</v-btn>
                                                        </template>
                                                        <v-card>
                                                            <v-card-title class="headline">셀러 선택</v-card-title>
                                                        </v-card>
                                                        <v-card-text
                                                            style="color:blue; background-color:white"
                                                        >상품을 등록할 셀러를 선택해주세요. (검색 10건)</v-card-text>
                                                        <form
                                                            style="display:flex; justify-content:center; background-color: white;"
                                                        >
                                                            <v-card-text
                                                                style="background-color:white; width:150px; margin:auto"
                                                            >
                                                                <span>셀러 검색</span>
                                                            </v-card-text>
                                                            <v-card-text
                                                                style="background-color:white"
                                                            >
                                                                <v-autocomplete
                                                                    v-model="model"
                                                                    :items="items"
                                                                    :loading="isLoading"
                                                                    :search-input.sync="search"
                                                                    color="white"
                                                                    hide-no-data
                                                                    hide-selected
                                                                    item-text="Description"
                                                                    item-value="API"
                                                                    placeholder="Select"
                                                                    prepend-icon="mdi-database-search"
                                                                    return-object
                                                                ></v-autocomplete>
                                                            </v-card-text>
                                                        </form>
                                                        <v-card-actions
                                                            style="background-color:white"
                                                        >
                                                            <v-spacer></v-spacer>
                                                            <v-btn
                                                                color="outline-dark"
                                                                text
                                                                @click="dialog = false"
                                                            >닫기</v-btn>
                                                            <b-button
                                                                variant="primary"
                                                                text
                                                                @click="dialog = false"
                                                            >셀러 선택하기</b-button>
                                                        </v-card-actions>
                                                    </v-dialog>
                                                </v-row>
                                            </v-app>
                                        </td>
                                    </tr>

                                    <tr style="border: 1px solid #ddd;">
                                        <td class="sold-status default-info-left">판매여부</td>
                                        <td style="width:400px">
                                            <div class="radio-list">
                                                <label class="radio-inline">
                                                    <div class="radio">
                                                        <span class="checked">
                                                            <input
                                                                type="radio"
                                                                name="sell"
                                                                value="Y"
                                                                checked="checked"
                                                            />
                                                        </span>
                                                    </div>판매
                                                </label>
                                                <label class="radio-inline">
                                                    <div class="radio">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="sell"
                                                                value="N"
                                                            />
                                                        </span>
                                                    </div>미판매
                                                </label>
                                            </div>
                                            <span class="font-color-blue" style="margin-top:10px;">
                                                <i class="xi-caret-up"></i> 미판매 선택시 앱에서 Sold Out으로 표시됩니다.
                                            </span>
                                        </td>
                                    </tr>

                                    <tr style="border: 1px solid #ddd;">
                                        <td class="display-status default-info-left">진열여부</td>
                                        <td style="width:400px">
                                            <div class="radio-list">
                                                <label class="radio-inline">
                                                    <div class="radio">
                                                        <span class="checked">
                                                            <input
                                                                type="radio"
                                                                name="display"
                                                                value="Y"
                                                                checked="checked"
                                                            />
                                                        </span>
                                                    </div>판매
                                                </label>
                                                <label class="radio-inline">
                                                    <div class="radio">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="display"
                                                                value="N"
                                                            />
                                                        </span>
                                                    </div>미판매
                                                </label>
                                            </div>
                                            <span class="font-color-blue" style="margin-top:10px;">
                                                <i class="xi-caret-up"></i> 미판매 선택시 앱에서 Sold Out으로 표시됩니다.
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="default-info-left">
                                            카테고리
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <td>
                                            <table class="table-category" />
                                            <thead>
                                                <tr>
                                                    <th width=" 40%">1차 카테고리</th>
                                                    <th width=" 40%">2차 카테고리</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input
                                                            type="hidden"
                                                            name="categoryNoArr"
                                                            value="NOT_SELECTED"
                                                            style="border:1px solid black;"
                                                        />
                                                        <div>
                                                            <b-form-select
                                                                v-model="selected"
                                                                :options="options"
                                                                size="sm"
                                                                class="mt-3"
                                                            ></b-form-select>
                                                            <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <b-form-select
                                                                v-model="selected"
                                                                :options="options"
                                                                size="sm"
                                                                class="mt-3"
                                                            ></b-form-select>
                                                            <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <span class="font-color-blue" style="margin-top: 10px;">
                                                <i class="xi-caret-up"></i> 카테고리 변경 시 입력한 실측 사이즈 정보는 초기화 됩니다.
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="product-info-explain default-info-left">상품 정보 고시</td>
                                        <td class="product_info">
                                            <div class="radio-list">
                                                <label class="radio-inline">
                                                    <div class="radio">
                                                        <button>
                                                            <input
                                                                type="radio"
                                                                name="information"
                                                                value="Y"
                                                                checked="checked"
                                                                v-on:click="isHidden = true"
                                                            />
                                                            상품 상세 참조
                                                        </button>
                                                    </div>
                                                </label>

                                                <label class="radio-inline">
                                                    <button>
                                                        <input
                                                            type="radio"
                                                            name="information"
                                                            value="N"
                                                            v-on:click="isHidden = !isHidden"
                                                        />
                                                        직접 입력
                                                    </button>
                                                </label>
                                            </div>
                                            <div class="input-directly" v-if="!isHidden">
                                                <div>
                                                    제조사(수입사) :
                                                    <input
                                                        type="text"
                                                        class="company-name"
                                                    />
                                                </div>
                                                <br />
                                                <div class="manufacture-day">
                                                    <span>제조일자 :</span>
                                                    <span>
                                                        <b-form-datepicker
                                                            style="width:250px"
                                                            id="example-datepicker"
                                                            v-model="value"
                                                            class="mb-2"
                                                        ></b-form-datepicker>
                                                    </span>
                                                </div>
                                                <br />
                                                <span>원산지 :</span>
                                                <span>
                                                    <b-form-select
                                                        style="width=200px;"
                                                        v-model="selected"
                                                        :options="options"
                                                        size="sm"
                                                        class="mt-3"
                                                    ></b-form-select>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="product-name default-info-left">
                                            상품명
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <td class="product-name">
                                            <input
                                                type="text"
                                                name="product_name"
                                                class="form-control"
                                                value
                                                maxlength="200"
                                            />
                                            <span class="font-color-blue">
                                                <p style="margin-top: 10px;">
                                                    <i class="xi-caret-up"></i> 상품명에는 쌍따옴표(") 또는 홑따옴표(')를 포함할 수 없습니다.
                                                </p>
                                                <p>
                                                    <i class="xi-caret-up"></i> 상품명에는 4byte 이모지를 포함할 수 없습니다.
                                                </p>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="oneline-explain default-info-left">
                                            한줄 상품 설명
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <td class="oneline-explain">
                                            <input type="text" class="one-line" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="image-upload default-info-left">
                                            이미지 등록
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <td class="image-upload" style="border: 1px solid #ddd;">
                                            <div id="preview">
                                                <img v-if="url" :src="url" />
                                            </div>
                                            <input
                                                type="file"
                                                @change="onFileChange"
                                                accept="image/*"
                                                multiple
                                            />
                                            <div class="font-color-blue">
                                                <i class="xi-caret-up"></i> 640 * 720 사이즈 이상 등록 가능하며 확장자는 jpg 만 등록 가능합니다.
                                            </div>

                                            <!-- <input type="file" id="image" accept="image/*" onchange="setThumbnail(event);" multiple/>
                                            <div id="image_container"></div>-->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="color-filter default-info-left">
                                            색상필터(썸네일 이미지)
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <td style="background-color: #f9f9f9;">
                                            <div class="col-md-12">
                                                <div class="radio-list">
                                                    <label class="radio-inline">
                                                        <div class="radio">
                                                            <span class="checked">
                                                                <input
                                                                    type="radio"
                                                                    name="colorCode"
                                                                    class="ui-control"
                                                                />
                                                            </span>
                                                        </div>사용안함
                                                    </label>
                                                    <label class="radio-inline">
                                                        <div class="radio">
                                                            <span>
                                                                <input
                                                                    type="radio"
                                                                    name="colorCode"
                                                                    class="ui-control"
                                                                />
                                                            </span>
                                                        </div>사용함
                                                    </label>
                                                    <div class="picker-box">
                                                        <input type="text" class="color-filter" />
                                                        <span class="color-box"></span>
                                                    </div>
                                                    <v-row justify="center">
                                                        <v-dialog
                                                            v-model="colordialog"
                                                            scrollable
                                                            max-width="450px"
                                                        >
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn
                                                                    color="primary"
                                                                    dark
                                                                    v-on="on"
                                                                >적용 할 색상 찾기</v-btn>
                                                            </template>
                                                            <v-card>
                                                                <v-card-title>색상 선택</v-card-title>
                                                                <v-divider></v-divider>
                                                                <v-card-text
                                                                    style="width:100%; height: 300px;"
                                                                >
                                                                    <tr>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dbscthumb-phinf.pstatic.net/2512_000_1/20130825213031822_DAT75UGRE.jpg/i-c-18.jpg?type=m4500_4500_fst_n&wm=Y"
                                                                            />
                                                                            <br />
                                                                            <span>빨강</span>
                                                                            <br />
                                                                            <span>(Red)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213048883_MOHWHB1G3.jpg%2Fi-c-30.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=352&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>주황</span>
                                                                            <br />
                                                                            <span>(Orange)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213141805_R5CXRESO9.jpg%2Fi-c-68.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=354&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>노랑</span>
                                                                            <br />
                                                                            <span>(Yellow)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20190711160628123_BB7XII6S4.jpg%2Fi-c-55.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=500&theight=62&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>베이지</span>
                                                                            <br />
                                                                            <span>(Beige)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213102693_IKNCISY3I.jpg%2Fi-c-38.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=352&theight=83&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>갈색</span>
                                                                            <br />
                                                                            <span>(Brown)</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <button>
                                                                            <td>
                                                                                <img
                                                                                    style="width:35px; height:35px; border-radius:20px;"
                                                                                    src="https://dbscthumb-phinf.pstatic.net/2512_000_1/20130825213031822_DAT75UGRE.jpg/i-c-18.jpg?type=m4500_4500_fst_n&wm=Y"
                                                                                />
                                                                                <br />
                                                                                <span>빨강</span>
                                                                                <br />
                                                                                <span>(Red)</span>
                                                                            </td>
                                                                        </button>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213048883_MOHWHB1G3.jpg%2Fi-c-30.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=352&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>주황</span>
                                                                            <br />
                                                                            <span>(Orange)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213141805_R5CXRESO9.jpg%2Fi-c-68.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=354&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>노랑</span>
                                                                            <br />
                                                                            <span>(Yellow)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20190711160628123_BB7XII6S4.jpg%2Fi-c-55.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=500&theight=62&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>베이지</span>
                                                                            <br />
                                                                            <span>(Beige)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213102693_IKNCISY3I.jpg%2Fi-c-38.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=352&theight=83&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>갈색</span>
                                                                            <br />
                                                                            <span>(Brown)</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <button>
                                                                            <td>
                                                                                <img
                                                                                    style="width:35px; height:35px; border-radius:20px;"
                                                                                    src="https://dbscthumb-phinf.pstatic.net/2512_000_1/20130825213031822_DAT75UGRE.jpg/i-c-18.jpg?type=m4500_4500_fst_n&wm=Y"
                                                                                />
                                                                                <br />
                                                                                <span>빨강</span>
                                                                                <br />
                                                                                <span>(Red)</span>
                                                                            </td>
                                                                        </button>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213048883_MOHWHB1G3.jpg%2Fi-c-30.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=352&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>주황</span>
                                                                            <br />
                                                                            <span>(Orange)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213141805_R5CXRESO9.jpg%2Fi-c-68.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=354&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>노랑</span>
                                                                            <br />
                                                                            <span>(Yellow)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20190711160628123_BB7XII6S4.jpg%2Fi-c-55.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=500&theight=62&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>베이지</span>
                                                                            <br />
                                                                            <span>(Beige)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213102693_IKNCISY3I.jpg%2Fi-c-38.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=352&theight=83&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>갈색</span>
                                                                            <br />
                                                                            <span>(Brown)</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <button>
                                                                            <td>
                                                                                <img
                                                                                    style="width:35px; height:35px; border-radius:20px;"
                                                                                    src="https://dbscthumb-phinf.pstatic.net/2512_000_1/20130825213031822_DAT75UGRE.jpg/i-c-18.jpg?type=m4500_4500_fst_n&wm=Y"
                                                                                />
                                                                                <br />
                                                                                <span>빨강</span>
                                                                                <br />
                                                                                <span>(Red)</span>
                                                                            </td>
                                                                        </button>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213048883_MOHWHB1G3.jpg%2Fi-c-30.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=352&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>주황</span>
                                                                            <br />
                                                                            <span>(Orange)</span>
                                                                        </td>
                                                                        <td>
                                                                            <img
                                                                                style="width:35px; height:35px; border-radius:20px;"
                                                                                src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2512_000_1%2F20130825213141805_R5CXRESO9.jpg%2Fi-c-68.jpg%3Ftype%3Dm4500_4500_fst_n%26wm%3DY%22&twidth=354&theight=80&opts=17"
                                                                            />
                                                                            <br />
                                                                            <span>노랑</span>
                                                                            <br />
                                                                            <span>(Yellow)</span>
                                                                        </td>
                                                                    </tr>
                                                                </v-card-text>
                                                                <v-divider></v-divider>
                                                                <v-card-actions>
                                                                    <v-btn
                                                                        class="ma-2"
                                                                        tile
                                                                        outlined
                                                                        color="success"
                                                                    >적용</v-btn>
                                                                    <v-btn
                                                                        color="blue darken-1"
                                                                        text
                                                                        @click="colordialog = false"
                                                                    >취소</v-btn>
                                                                </v-card-actions>
                                                            </v-card>
                                                        </v-dialog>
                                                    </v-row>
                                                </div>
                                                <br />
                                                <span class="font-color-blue">
                                                    <i class="xi-caret-up"></i> 베스트 탭, 카테고리 페이지 및 검색페이지의 필터에 적용되며, 선택하지 않으실 경우 색상필터를 사용한 검색결과에 노출되지 않습니다.
                                                    <br />
                                                    <i class="xi-caret-up"></i> 썸네일 이미지의 1개 색상만 선택 가능하며, 뷰티 및 다이어트 카테고리의 상품의 경우 선택하실 수 없습니다.
                                                </span>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr style="border: 1px solid #ddd;">
                                        <td class="style-filter default-info-left">
                                            스타일필터
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <label class="radio-inline">
                                            <div class="radio">
                                                <span class="checked">
                                                    <input
                                                        type="radio"
                                                        name="styleCode"
                                                        class="ui-control"
                                                        disabled="disabled"
                                                    />
                                                </span>
                                            </div>선택안함
                                        </label>
                                        <label class="radio-inline">
                                            <div class="radio">
                                                <span class="checked">
                                                    <input
                                                        type="radio"
                                                        name="styleCode"
                                                        class="ui-control"
                                                        disabled="disabled"
                                                    />
                                                </span>
                                            </div>심플베이직
                                        </label>
                                        <label class="radio-inline">
                                            <div class="radio">
                                                <span class="checked">
                                                    <input
                                                        type="radio"
                                                        name="styleCode"
                                                        class="ui-control"
                                                        disabled="disabled"
                                                    />
                                                </span>
                                            </div>러블리
                                        </label>
                                        <label class="radio-inline">
                                            <div class="radio">
                                                <span class="checked">
                                                    <input
                                                        type="radio"
                                                        name="styleCode"
                                                        class="ui-control"
                                                        disabled="disabled"
                                                    />
                                                </span>
                                            </div>페미닌
                                        </label>
                                        <label class="radio-inline">
                                            <div class="radio">
                                                <span class="checked">
                                                    <input
                                                        type="radio"
                                                        name="styleCode"
                                                        class="ui-control"
                                                        disabled="disabled"
                                                    />
                                                </span>
                                            </div>캐주얼
                                        </label>
                                        <label class="radio-inline">
                                            <div class="radio">
                                                <span class="checked">
                                                    <input
                                                        type="radio"
                                                        name="styleCode"
                                                        class="ui-control"
                                                        disabled="disabled"
                                                    />
                                                </span>
                                            </div>섹시글램
                                        </label>
                                        <span class="font-color-blue">
                                            <i class="xi-caret-up"></i> 베스트 탭, 카테고리 페이지 및 검색페이지의 필터에 적용되며, 선택하지 않으실 경우 색상필터를 사용한 검색결과에 노출되지 않습니다.
                                            <br />
                                            <i class="xi-caret-up"></i> 1개 스타일만 선택 가능하며, 브랜드 및 뷰티&다이어트 카테고리 상품의 경우 선택하실 수 없습니다.
                                        </span>
                                    </tr>
                                    <tr>
                                        <td class="default-info-left">
                                            연령필터
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <td>
                                            <div class="col-md-12">
                                                <button
                                                    type="button"
                                                    class="age-filter"
                                                >--연령필터 데이터받을곳--</button>
                                                <br />
                                                <br />
                                                <span class="font-color-blue">
                                                    <i class="xi-caret-up"></i> 베스트 탭, 카테고리 페이지 및 검색페이지의 필터에 적용되며, 셀러 정보 셀러태그정보의 연령대가 자동으로 적용됩니다.
                                                    <br />
                                                    <i class="xi-caret-up"></i> 브랜드 및 뷰티 다이어트 카테고리 상품의 경우 적용되지 않습니다.
                                                    <br />
                                                    <i class="xi-caret-up"></i> 해당 정보는 상품단위로 적용이 불가능하며(셀러 단위로만 가능), 수정을 원하실 경우 카카오 플러스친구 '브랜디셀러'로 연락 부탁드립니다.
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="default-info-left">
                                            상세 상품정보
                                            <span class="font-color-red">*</span>
                                        </td>
                                        <ckeditor
                                            :editor="editor"
                                            v-model="editorData"
                                            :config="editorConfig"
                                            class="ckeditor"
                                        ></ckeditor>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="container">
                        <div class="box">
                            <div id="app">
                                <div class="ProductRegist">
                                    <div class="page_content">
                                        <div class="portlet">
                                            <div class="portlet-title">
                                                <div class="caption">
                                                    <i class="xi-pen-o" style="color: black;"></i>
                                                    <span>옵션정보</span>
                                                </div>
                                            </div>
                                            <div
                                                class="row"
                                                style="border: 1px solid rgb(136, 136, 136); background-color: rgb(249, 249, 249);"
                                            >
                                                <div class="col-md-12">
                                                    <table
                                                        class="table-in-portlet"
                                                        style="border: 1px solid rgb(221, 221, 221);"
                                                    >
                                                        <tbody>
                                                            <tr
                                                                style="border: 1px solid rgb(221, 221, 221);"
                                                            >
                                                                <td
                                                                    width="15%"
                                                                    class="seller-choice default-info-left"
                                                                >
                                                                    옵션 설정
                                                                    <span
                                                                        class="font-color-red"
                                                                    >*</span>
                                                                </td>
                                                                <td
                                                                    style="width: 300px; display: flex;"
                                                                >
                                                                    <div class="radio-list">
                                                                        <label class="radio-inline">
                                                                            <div class="radio">
                                                                                <span
                                                                                    class="checked"
                                                                                >
                                                                                    <input
                                                                                        type="radio"
                                                                                        name="sell"
                                                                                        value="Y"
                                                                                    />
                                                                                </span>
                                                                            </div>기본 옵션
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr
                                                                style="border: 1px solid rgb(221, 221, 221);"
                                                            >
                                                                <td
                                                                    width="15%"
                                                                    class="seller-choice default-info-left"
                                                                >옵션 정보</td>
                                                                <td colspan="3">
                                                                    <div class="basic-option-wrap">
                                                                        <table
                                                                            class="table table-bordered"
                                                                        >
                                                                            <thead>
                                                                                <tr class="heading">
                                                                                    <th>옵션항목</th>
                                                                                    <th>상품옵션명</th>
                                                                                    <th>옵션값 추가/삭제</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr
                                                                                    class="option-group-1"
                                                                                >
                                                                                    <td
                                                                                        width="15%"
                                                                                        rowspan="1"
                                                                                    >색상</td>
                                                                                    <td>
                                                                                        <select
                                                                                            name="basicOptionSelect"
                                                                                            class="form-control"
                                                                                            placeholder="컬러 옵션을 선택해 주세요."
                                                                                            title
                                                                                        >
                                                                                            <option
                                                                                                value="0"
                                                                                            >색상 옵션을 선택해 주세요.</option>
                                                                                            <option
                                                                                                value="2"
                                                                                            >Black</option>
                                                                                            <option
                                                                                                value="3"
                                                                                            >White</option>
                                                                                            <option
                                                                                                value="4"
                                                                                            >Gray</option>
                                                                                            <option
                                                                                                value="5"
                                                                                            >Ivory</option>
                                                                                            <option
                                                                                                value="6"
                                                                                            >Navy</option>
                                                                                        </select>
                                                                                    </td>

                                                                                    <td width="15%">
                                                                                        <div
                                                                                            class="text-center"
                                                                                        >
                                                                                            <v-btn
                                                                                                class="mx-2"
                                                                                                fab
                                                                                                dark
                                                                                                small
                                                                                                color="indigo"
                                                                                            >
                                                                                                <v-icon
                                                                                                    dark
                                                                                                >mdi-plus</v-icon>
                                                                                            </v-btn>
                                                                                            <v-btn
                                                                                                class="mx-2"
                                                                                                fab
                                                                                                dark
                                                                                                small
                                                                                                color="primary"
                                                                                            >
                                                                                                <v-icon
                                                                                                    dark
                                                                                                >mdi-minus</v-icon>
                                                                                            </v-btn>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr
                                                                                    class="option-group-2"
                                                                                >
                                                                                    <td
                                                                                        width="15%"
                                                                                        rowspan="1"
                                                                                    >사이즈</td>
                                                                                    <td>
                                                                                        <select
                                                                                            name="basicOptionSelect"
                                                                                            class="form-control"
                                                                                            placeholder="사이즈 옵션을 선택해 주세요."
                                                                                            tabindex="-1"
                                                                                            title
                                                                                        >
                                                                                            <option
                                                                                                value="0"
                                                                                            >사이즈 옵션을 선택해 주세요.</option>
                                                                                            <option
                                                                                                value="2"
                                                                                            >라지</option>
                                                                                            <option
                                                                                                value="3"
                                                                                            >미디엄</option>
                                                                                            <option
                                                                                                value="4"
                                                                                            >스몰</option>
                                                                                            <option
                                                                                                value="5"
                                                                                            >투엑스</option>
                                                                                            <option
                                                                                                value="6"
                                                                                            >쓰리엑스</option>
                                                                                        </select>
                                                                                    </td>

                                                                                    <td width="15%">
                                                                                        <div
                                                                                            class="text-center"
                                                                                        >
                                                                                            <v-btn
                                                                                                class="mx-2"
                                                                                                fab
                                                                                                dark
                                                                                                small
                                                                                                color="indigo"
                                                                                            >
                                                                                                <v-icon
                                                                                                    dark
                                                                                                >mdi-plus</v-icon>
                                                                                            </v-btn>
                                                                                            <v-btn
                                                                                                class="mx-2"
                                                                                                fab
                                                                                                dark
                                                                                                small
                                                                                                color="primary"
                                                                                            >
                                                                                                <v-icon
                                                                                                    dark
                                                                                                >mdi-minus</v-icon>
                                                                                            </v-btn>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot>
                                                                                <tr class="heading">
                                                                                    <td
                                                                                        class="vertical-align-middle"
                                                                                    >재고관리여부</td>
                                                                                    <td
                                                                                        colspan="6"
                                                                                        class="vertical-align-middle"
                                                                                    >
                                                                                        <div>
                                                                                            <label
                                                                                                class="radio-inline"
                                                                                            >
                                                                                                <div
                                                                                                    class="radio"
                                                                                                >
                                                                                                    <span
                                                                                                        class="checked"
                                                                                                    >
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            name="basicOptionInventoryUseyn"
                                                                                                        />
                                                                                                    </span>
                                                                                                </div>재고 수량 관리 안함
                                                                                            </label>
                                                                                            <label
                                                                                                class="radio-inline"
                                                                                            >
                                                                                                <div
                                                                                                    class="radio"
                                                                                                >
                                                                                                    <span>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            name="basicOptionInventoryUseyn"
                                                                                                        />
                                                                                                    </span>
                                                                                                </div>재고 수량 관리
                                                                                            </label>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tfoot>
                                                                        </table>

                                                                        <v-btn
                                                                            color="green"
                                                                            dark
                                                                            v-on="on"
                                                                            style="margin-bottom:30px;"
                                                                        >적용</v-btn>

                                                                        <table
                                                                            class="table table-bordered"
                                                                        >
                                                                            <thead>
                                                                                <tr class="heading">
                                                                                    <th
                                                                                        class="bd-top"
                                                                                    >상품옵션정보</th>
                                                                                    <th
                                                                                        class="bd-top"
                                                                                    >일반재고</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <thead>
                                                                                <tr class="heading">
                                                                                    <th
                                                                                        class="bd-top"
                                                                                    >색상 / 사이즈</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        colspan="11"
                                                                                    >
                                                                                        <label>옵션정보를 입력 후 [적용] 버튼을 눌러주세요.</label>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>

                                                                        <div
                                                                            class="font-color-blue"
                                                                        >
                                                                            <i class="xi-caret-up"></i>
                                                                            도매처옵션명 조합은 최대 100자까지 표시됩니다.
                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <span
                                                                    class="font-color-blue"
                                                                    style="margin-top: 10px;"
                                                                ></span>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="box">
                            <div id="app">
                                <div class="ProductRegist">
                                    <div class="page_content">
                                        <div class="portlet">
                                            <div class="portlet-title">
                                                <div class="caption">
                                                    <i class="xi-pen-o" style="color: black;"></i>
                                                    <span>판매정보</span>
                                                </div>
                                            </div>
                                            <div
                                                class="row"
                                                style="border: 1px solid rgb(136, 136, 136); background-color: rgb(249, 249, 249);"
                                            >
                                                <div class="col-md-12">
                                                    <table
                                                        class="table-in-portlet"
                                                        style="border: 1px solid rgb(221, 221, 221);"
                                                    >
                                                        <tbody>
                                                            <tr
                                                                style="border: 1px solid rgb(221, 221, 221);"
                                                            >
                                                                <td
                                                                    width="15%"
                                                                    height="50px"
                                                                    class="seller-choice default-info-left"
                                                                >도매원가</td>
                                                                <td class="td-wholesale">
                                                                    <div class="input-group">
                                                                        <input
                                                                            class="wholesale"
                                                                            type="text"
                                                                            maxlength="8"
                                                                            placeholder="0"
                                                                        />
                                                                    </div>
                                                                    <span
                                                                        class="input-group-addon"
                                                                    >원</span>
                                                                </td>
                                                            </tr>
                                                            <tr
                                                                style="border: 1px solid rgb(221, 221, 221);"
                                                            >
                                                                <td
                                                                    width="15%"
                                                                    height="50px"
                                                                    class="seller-choice default-info-left"
                                                                >
                                                                    판매가
                                                                    <span
                                                                        class="font-color-red"
                                                                    >*</span>
                                                                </td>
                                                                <td class="td-wholesale">
                                                                    <div class="input-group">
                                                                        <input
                                                                            class="wholesale"
                                                                            type="text"
                                                                            maxlength="8"
                                                                            placeholder="0"
                                                                        />
                                                                    </div>
                                                                    <span
                                                                        class="input-group-addon"
                                                                    >원</span>
                                                                </td>
                                                                <span class="font-color-blue">
                                                                    <i class="xi-caret-up"></i>
                                                                    판매가는 원화기준 10원 이상이며 가격 입력 시 10원 단위로 입력해 주세요.
                                                                </span>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    width="15%"
                                                                    height="50px"
                                                                    class="seller-choice default-info-left"
                                                                >
                                                                    할인정보
                                                                    <span
                                                                        class="font-color-red"
                                                                    >*</span>
                                                                </td>
                                                                <td colspan="3">
                                                                    <div class="col-md-6 td-line">
                                                                        <table>
                                                                            <tbody>
                                                                                <tr class="td-line">
                                                                                    <td
                                                                                        class="td-line"
                                                                                    >할인율</td>
                                                                                    <td
                                                                                        class="td-line"
                                                                                        width="200px"
                                                                                    >할인가</td>
                                                                                </tr>
                                                                                <tr class="td-line">
                                                                                    <td
                                                                                        class="td-line"
                                                                                    >
                                                                                        <div>
                                                                                            <input
                                                                                                type="text"
                                                                                            />
                                                                                            <span>%</span>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td
                                                                                        class="td-line"
                                                                                    >
                                                                                        <div>
                                                                                            <input
                                                                                                type="text"
                                                                                            />원
                                                                                            <button
                                                                                                type="button"
                                                                                            >할인판매가적용</button>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="td-line">
                                                                                    <td
                                                                                        class="td-line"
                                                                                    >할인판매가</td>
                                                                                    <td
                                                                                        class="td-line"
                                                                                    >
                                                                                        <input
                                                                                            type="text"
                                                                                        /> "원"
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="td-line">
                                                                                    <td
                                                                                        class="td-line"
                                                                                    >할인기간</td>
                                                                                    <td
                                                                                        class="td-line"
                                                                                    >
                                                                                        <div
                                                                                            class="td-line"
                                                                                        >
                                                                                            <label
                                                                                                class="discount-label"
                                                                                            >
                                                                                                <div>
                                                                                                    <span>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                        />
                                                                                                    </span>
                                                                                                </div>무기한
                                                                                            </label>
                                                                                            <label>
                                                                                                <div>
                                                                                                    <span>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                        />
                                                                                                    </span>
                                                                                                </div>기간설정
                                                                                            </label>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div
                                                                                                class="col-md-12"
                                                                                            >
                                                                                                <div
                                                                                                    class="col-md-12"
                                                                                                >
                                                                                                    <div
                                                                                                        class="input-group"
                                                                                                    >
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="클릭해주세요"
                                                                                                        />
                                                                                                        <span
                                                                                                            class="input-group-addon"
                                                                                                        >~</span>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="클릭해주세요"
                                                                                                        />
                                                                                                        <br />
                                                                                                        <span>* 할인기간을 설정시 기간만료되면 자동으로 정상가로 변경 됩니다.</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <span
                                                                            class="font-color-blue"
                                                                        >
                                                                            <i class="xi-caret-up"></i> 할인판매가 = 판매가 * 할인율
                                                                            <br />
                                                                            <i class="xi-caret-up"></i> 할인 판매가 적용 버튼을 클릭 하시면 판매가 정보가 자동 계산되어집니다.
                                                                            <br />
                                                                            <i class="xi-caret-up"></i> 할인 판매가는 원화기준 10원 단위로 자동 절사됩니다.
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Datepicker from 'vuejs-datepicker';

export default {
    el: `#app`,
    components: {},
    data() {
        return {
            text: '',
            colordialog: false,
            dialogm1: '',
            message: 'Default Message',
            isHidden: false,
            key: '',
            selected: null,
            options: [
                { value: null, text: '1차 카테고리를 선택해주세요' },
                { value: 'a', text: '아우터' },
                { value: 'b', text: '상의' },
                { value: { C: '3PO' }, text: '스커트' },
                { value: 'd', text: '바지' },
                { value: 'e', text: '원피스' },
                { value: 'f', text: '신발' },
                { value: 'g', text: '가방' },
                { value: 'h', text: '잡화' },
                { value: 'i', text: '주얼리' },
                { value: 'j', text: '라이프웨어' },
                { value: 'k', text: '빅사이즈' }
                // { value: 'd', text: 'This one is disabled', disabled: true }
            ],
            contury: [{ value: 'a', text: '한국' }],
            url: null,
            editor: ClassicEditor,
            editorData: '<p> 브랜디디디 </p>',
            editorConfig: {
                // The configuration of the editor.
            },
            date: null,
            dateFormatted: null,
            menu1: false
        };
    },
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date);
        }
    },
    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date);
        }
    },
    methods: {
        onChange(event) {
            console.log(event.target.value);
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split('-');
            return `${month}/${day}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [month, day, year] = date.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
    }
};
</script>
<style lang="scss" scoped>
.ProductRegist {
    display: flex;
}
.page_content {
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 20px;

    .page_title {
        background-color: #eee;
        padding: 10px 10px 2px 10px;
        font-size: 20px;
        small {
            font-size: 14px;
            letter-spacing: 0px;
            font-weight: 300;
            color: #888;
        }
    }
    .page_bar {
        border: 0;
        padding: 0px;
        background-color: #eee;
        margin-bottom: 25px;
        margin-left: -20px;
        margin-right: -20px;
        padding-left: 10px;
        padding-right: 20px;
    }
    .page_ul {
        display: flex;
        justify-content: flex-start;
        padding: 8px;
        margin: 0;
        list-style: none;
    }

    .portlet {
        clear: both;
        margin-top: 0px;
        margin-bottom: 25px;
        padding: 0px;
        -webkit-box-shadow1: 0 1px 4px rgba(0, 0, 0, 0.07);
        border: 1px solid #888;
        border-radius: 4px;

        .portlet-title {
            background-color: #eee;
            border-radius: 4px 4px 0 0;
            padding: 10px 10px 2px 10px;
            height: 38px;
        }

        .caption {
            color: #333;
            display: flex;
            justify-content: flex-start;
            font-size: 16px;
            line-height: 16px;
            font-weight: 400;
            margin: 0;
            padding: 0;
            margin-top: 1px;
        }
    }

    .row {
        margin-right: -15px;
        margin-left: -15px;

        .col-md-12 {
            width: 100%;
        }
        .table-in-portlet {
            border: 1px solid #888;
            width: 100%;
        }
        .align-middle {
            background-color: #f9f9f9;
            .font-color-red {
                color: red !important;
            }
            input[type='button'] {
                -webkit-appearance: button;
                cursor: pointer;
            }
        }

        .radio-list {
            display: flex;
            align-items: center;
            .radio-inline {
                margin-left: 20px;
            }
        }

        .font-color-blue {
            font-size: 13px;
            color: #1e90ff !important;
        }
        .font-color-red {
            color: red !important;
        }
        .table-category {
            zoom: 1;
            position: static;
            width: 500px;
            background-color: #f9f9f9;
        }
        .radio {
            display: flex;
        }
        .input-directly {
            height: 300px;
        }
        .manufacture-day {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .product_info {
            width: 300px;
            background-color: #f9f9f9;
        }
        .company-name {
            margin-top: 10px;
            background-color: white;
            border: 1px solid #888;
            width: 400px;
            background-color: white;
            border: 1px solid #888;
        }
        .origin {
            width: 400px;
        }
        .form-selectd {
            border: 1px solid #888;
            background-color: white;
            width: 300px;
        }
        .form-control {
            width: 100%;
            border: 1px solid #888;
        }
        .color-filter {
            border: 1px solid #ddd;
            width: 200px;
        }
        .one-line {
            width: 100%;
            background-color: white;
            border: 1px solid #888;
        }
        #preview {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #preview img {
            max-width: 100%;
            max-height: 500px;
        }

        .picker-box {
            margin-right: 30px;
        }
    }
    .li-tag {
        margin-top: 15px;
    }
    .age-filter {
        background-color: white;
        width: 200px;
        height: 12px;
        border-radius: 15px;
    }
    .ckeditor {
        display: block;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 3px;
        background: #eee;
    }
    .vertical-align-middle {
        height: unset;
        background-color: #eee !important;
    }
    .bd-top {
        font-size: 14px;
        font-weight: 600;
        background-color: #eee !important;
    }

    .default-info-left {
        background-color: #eee;
        text-align: center;
    }

    .td-wholesale {
        display: flex;
    }

    .input-group {
        padding-bottom: 10px;
        width: 240px !important;
        background-color: white;
        border-radius: 10px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .wholesale {
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-left: 10px;
    }

    .input-group-addon {
        border-color: #e5e5e5;
        background: #e5e5e5;
        min-width: 39px;
        margin-top: 10px;
    }

    .td-line {
        border: 1px solid black;
    }

    .discount-label {
        width: 120px;
    }
    .discount-div {
        background-color: #f9f9f9;
    }

    // .seller_tr {
    //   height: 20px !important;
    // }
    // .seller_choice {
    //   height: 20px !important;
    //   margin: 0 10px;
    // }
    // .search_seller {
    //   cursor: not-allowed;
    //   background-color: #eeeeee;
    //   margin-left: 20px;
    // }
}
</style>
