<?php
class ControllerTotalProrateCredit extends Controller {
	private $error = array();

	public function index() {
		$data = $this->load->language('total/prorate_credit');

		$this->document->setTitle($this->language->get('heading_title'));

		$this->load->model('setting/setting');

		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {
			$this->model_setting_setting->editSetting('prorate_credit', $this->request->post);

			$this->session->data['success'] = $this->language->get('success_update');

			$this->response->redirect($this->url->link('extension/total', 'token=' . $this->session->data['token'], true));
		}

		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/dashboard', 'token=' . $this->session->data['token'], true)
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_total'),
			'href' => $this->url->link('extension/total', 'token=' . $this->session->data['token'], true)
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('total/prorate_credit', 'token=' . $this->session->data['token'], true)
		);

		$data['action'] = $this->url->link('total/prorate_credit', 'token=' . $this->session->data['token'], true);

		$data['cancel'] = $this->url->link('extension/total', 'token=' . $this->session->data['token'], true);

		if (isset($this->request->post['prorate_credit_status'])) {
			$data['prorate_credit_status'] = $this->request->post['prorate_credit_status'];
		} else {
			$data['prorate_credit_status'] = $this->config->get('prorate_credit_status');
		}

		if (isset($this->request->post['prorate_credit_sort_order'])) {
			$data['prorate_credit_sort_order'] = $this->request->post['prorate_credit_sort_order'];
		} else {
			$data['prorate_credit_sort_order'] = $this->config->get('prorate_credit_sort_order');
		}

		$data['header']      = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer']      = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('total/prorate_credit', $data));
	}

	protected function validate() {
		if (!$this->user->hasPermission('modify', 'total/prorate_credit')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}

		return !$this->error;
	}
}