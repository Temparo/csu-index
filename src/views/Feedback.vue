<script lang="ts" setup>
import {reactive, ref} from "vue";
import {ComponentSize, FormInstance, FormRules} from "element-plus";
import {useRouter} from "vue-router";
import {UploadFilled} from '@element-plus/icons-vue'


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
  position: string
  type: string[]
  device: string
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
  position: '',
  type: [],
  device: '',
  detail: '',
  grade: 2.5

})

const PositionOptions = ['本科生', '研究生', '博士及以上', '教职工', '其他']

const rules = reactive<FormRules<RuleForm>>({
  name: [
    {required: true, message: '请输入昵称', trigger: 'blur'},
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
  position: [
    {
      required: true,
      message: '请选择身份',
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
  device: [
    {
      required: true,
      message: '请选择出现问题时您的使用设备',
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
      console.log('提交成功！')
    } else {
      console.log('提交失败！', fields)
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
        <el-breadcrumb-item>Feedback</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </el-page-header>
  <el-container class="container">
    <el-main>
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
              <el-form-item label="昵称" prop="name">
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
              <el-option label="页面设计建议" value="design"/>
              <el-option label="页面卡顿，加载缓慢" value="network"/>
              <el-option label="页面显示不全或错乱" value="device"/>
              <el-option label="新功能需求" value="feature"/>
              <el-option label="新增网址建议" value="addlink"/>
            </el-select>
          </el-form-item>

          <el-row>
            <el-col :span="16">
              <el-form-item label="身份" prop="position">
                <el-segmented v-model="ruleForm.position" :options="PositionOptions"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="希望收到回复" prop="respond">
                <el-switch v-model="ruleForm.respond"/>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="这里要改成什么捏" prop="type">
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
          <el-form-item label="使用设备" prop="device">
            <el-radio-group v-model="ruleForm.device">
              <el-radio value="智能手机">智能手机</el-radio>
              <el-radio value="平板或iPad">平板或 iPad</el-radio>
              <el-radio value="电脑">电脑</el-radio>
            </el-radio-group>
          </el-form-item>


          <el-upload
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              class="upload-demo"
              drag
              multiple
          >
            <el-icon class="el-icon--upload">
              <upload-filled/>
            </el-icon>
            <div class="el-upload__text">
              拖拽图片或<em>点击上传</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                图片文件应小于500kb
              </div>
            </template>
          </el-upload>


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
