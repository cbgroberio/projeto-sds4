package com.devsuperior.dsvendas.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository salerepository;
	
	@Autowired
	private SellerRepository sellerrepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		//busca os sellers e deixa na memoria para evitar retornos desnecessarios ao DB
		sellerrepository.findAll(); 
		
		Page<Sale> result = salerepository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
	/*
	public List<SaleDTO> findAll(){
		List<Sale> result = salerepository.findAll();
		return result.stream().map(x -> new SaleDTO(x)).collect(Collectors.toList());
	}*/
	
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return salerepository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller(){
		return salerepository.successGroupedBySeller();
	}
}
