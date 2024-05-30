<script lang="ts" setup>
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {ComponentSize, FormInstance, FormRules} from "element-plus";

const router = useRouter()
const goBack = () => {
  router.push('/index')
}

interface RuleForm {
  name: string
  email: string
  types: string
  date1: string
  date2: string
  respond: boolean
  location: string
  type: string[]
  resource: string
  detail: string
  grade: number
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  email: '',
  types: '',
  date1: '',
  date2: '',
  respond: false,
  location: '',
  type: [],
  resource: '',
  detail: '',
  grade: 2.5

})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive<FormRules<RuleForm>>({
  name: [
    {required: true, message: '请输入姓名', trigger: 'blur'},
    {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
  ],
  email: [
    {required: true, message: '请输入邮箱', trigger: 'blur'},
    {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']},
  ],
  types: [
    {
      required: true,
      message: '请选择问题种类',
      trigger: 'change',
    },
  ],
  location: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  detail: [
    {required: true, message: '请输入详细描述', trigger: 'blur'},
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>

<template>
  <el-page-header @back="goBack">
    <template #content>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>About</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </el-page-header>
  <el-container class="container">
    <el-main>
      <el-card>
        <div class="about">
          <h2>CSU-Index是一个导航页，为中南大学学生提供常用网站链接</h2>
        </div>
      </el-card>
      <el-card>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            :size="formSize"
            class="ruleForm"
            label-width="auto"
            status-icon
            style="max-width: 1200px"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="ruleForm.email"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="rate-block" label="使用体验" prop="grade">
            <el-rate v-model="ruleForm.grade" :colors="colors" allow-half class="text-justify"/>

          </el-form-item>
          <el-form-item label="问题种类" prop="types">
            <el-select v-model="ruleForm.types" placeholder="问题种类">
              <el-option label="页面设计" value="design"/>
              <el-option label="页面卡顿，加载缓慢" value="network"/>
              <el-option label="页面显示不全" value="device"/>
              <el-option label="新功能需求" value="feature"/>
            </el-select>
          </el-form-item>
          <el-form-item label="希望收到回复" prop="respond">
            <el-switch v-model="ruleForm.respond"/>
          </el-form-item>
          <el-form-item label="Activity location" prop="location">
            <el-segmented v-model="ruleForm.location" :options="locationOptions"/>
          </el-form-item>
          <el-form-item label="Activity type" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox name="type" value="Online activities">
                Online activities
              </el-checkbox>
              <el-checkbox name="type" value="Promotion activities">
                Promotion activities
              </el-checkbox>
              <el-checkbox name="type" value="Offline activities">
                Offline activities
              </el-checkbox>
              <el-checkbox name="type" value="Simple brand exposure">
                Simple brand exposure
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio value="Sponsorship">Sponsorship</el-radio>
              <el-radio value="Venue">Venue</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="问题描述" prop="detail">
            <el-input v-model="ruleForm.detail" type="textarea"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              Create
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>
.rate-block {
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

</style>
